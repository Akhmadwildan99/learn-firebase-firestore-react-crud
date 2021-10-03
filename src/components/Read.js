import React, {useState ,useEffect } from 'react';
import { db } from '../firebase.config'; 
import { doc, getDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, ListGroup, Row, Col, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
// import FormUpdate from './FormUpdate';

function Read() {
    const [user, setUser] = useState({});
    console.log(user);
    const history = useHistory()
    // const [updateData, setUpdateData] = useState({
    //     username: user.username,
    //     email: user.email,
    //     password: user.password,
    //     id: user.id
    // });
    // const [id, setId] = useState([]);
   


    // console.log(id)
   
    const id = localStorage.getItem("userId");
    const userId = JSON.parse(id);
    useEffect(() => {
        const fetchUser =  async(db) => {
            try {
                const docRef = doc(db, "player", userId);
                const docSnap = await getDoc(docRef);
                setUser(docSnap.data());
                console.log("Document data:", docSnap.data());
            } catch(err) {
                console.log("No such document!", err);
                history.push('/login')
            }
            
        }
        fetchUser(db)
    }, [userId, history])

   
    return (
        <Container>
            <Row>
                <Col sm={3} >
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>{user && user.username}</ListGroup.Item>
                            <ListGroup.Item>{user && user.score}</ListGroup.Item>
                            <Button onClick={null}>update</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    {/* <FormUpdate updateData={null}/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Read
