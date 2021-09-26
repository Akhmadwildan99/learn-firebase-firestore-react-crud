import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config'; 
import {collection, getDocs} from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, ListGroup, Row, Col} from 'react-bootstrap'

function Read() {
    const [user, setUser] = useState([]);
    console.log(user);

    
   
    useEffect(() => {
        const fetchUser =  async(db) => {
            const response = collection(db, "users");
            const data = await getDocs(response);
            setUser(data.docs.map(doc => doc.data()))
        }
        fetchUser(db)
    }, [])
    return (
        <Container>
            <Row>
                {user.map(item => {
                    return (
                        <Col sm={3}>
                            <Card style={{ width: '18rem' }} >
                                <ListGroup variant="flush" key={item.password}>
                                    <ListGroup.Item>{item.username}</ListGroup.Item>
                                    <ListGroup.Item>{item.email}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Read
