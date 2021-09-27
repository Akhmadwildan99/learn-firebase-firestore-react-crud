import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config'; 
import {collection, getDocs} from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, ListGroup, Row, Col, Button} from 'react-bootstrap';
import FormUpdate from './FormUpdate';

function Read() {
    const [user, setUser] = useState([]);
    const [updateData, setUpdateData] = useState({
        username: user.username,
        email: user.email,
        password: user.password,
        id: user.id
    });
    // const [id, setId] = useState([]);
   


    // console.log(id)
   
   
    useEffect(() => {
        const fetchUser =  async(db) => {
            const response = collection(db, "users");
            const data = await getDocs(response);
            const users = data.docs.map(doc => ({...doc.data(), id: doc.id}));
            setUser(users)
            
        }
        fetchUser(db)
    }, [])

    function pickUpdateData(data) {
        setUpdateData(data)
    }
   
    return (
        <Container>
            <Row>
                {user.map(item => {
                    return (
                        <Col sm={3} >
                            <Card style={{ width: '18rem' }} key={item.id}>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item>{item.username}</ListGroup.Item>
                                    <ListGroup.Item>{item.email}</ListGroup.Item>
                                    <Button onClick={() => pickUpdateData(item)}>update</Button>
                                </ListGroup>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col sm={6}>
                    <FormUpdate updateData={updateData}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Read
