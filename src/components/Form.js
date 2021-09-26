import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../firebase.config';
import {Row, Col, Container } from 'react-bootstrap';
import './form.css';

export default function Form() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(username !== "" && email !== "" && password !== "") {
            const data = {
                username,
                email,
                password
            }
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    data
                })
                console.log("Document written with ID: ", docRef.id);
            } catch (err) {
                console.error("Error adding document: ", err);
            }
            setError(false)
        } else {
            setError(true)
        }
        
    } 
    return ( 
        <Container>
            <Row>
                <Col sm={12}>
                    <div className="form-add-content">
                        <form className='form' >
                            <h1>
                            Form Create Player
                            </h1>
                            {error && <h2>Isi cukk!!!</h2>}
                            <div className='form-inputs'>
                                {/* <label className='form-label'> Username </label> */}
                                <input
                                    className='form-input'
                                    type='text'
                                    name='username'
                                    placeholder='Enter your username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <br/>
                            </div>
                            <div className='form-inputs'>
                                {/* <label className='form-label'> Email </label> */}
                                <input
                                    className='form-input'
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />  
                                <br/>
                                          
                            </div>
                            <div className='form-inputs'>
                                {/* <label className='form-label'> Password </label> */}
                                <input
                                    className='form-input'
                                    type='password'
                                    name='password'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /> 
                                <br/>
                            </div>
                            <button type='submit' className='form-input-submit' onClick={handleSubmit}>
                                Sign Up
                            </button>
                        </form>  
                    </div>

                </Col>
            </Row>
        </Container>
    )
}