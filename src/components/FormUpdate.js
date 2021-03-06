import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container } from 'react-bootstrap';
import { db } from '../firebase.config';
import { doc, setDoc } from "firebase/firestore"; 

import './form.css';

function FormUpdate({updateData}) {
    const [usernameUp, setUsernameUp] = useState("");
    const [emailUp, setEmailUp]= useState("")
    const [passwordUp, setPasswordUp] = useState("");
    const [error, setError] = useState(false);
    console.log(updateData.id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(usernameUp !== "" && emailUp !== "" && passwordUp !== "") {
            const dataUser = {
                username: usernameUp,
                email: emailUp,
                password: passwordUp
            }
            await setDoc(doc(db, "users", updateData.id), dataUser);
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
                            Form Update Player
                            </h1>
                            {error && <h2>Isi cukk!!!</h2>}
                            <div className='form-inputs'>
                                {/* <label className='form-label'> Username </label> */}
                                <input
                                    className='form-input'
                                    type='text'
                                    name='username'
                                    placeholder='Enter your username'
                                    value={usernameUp ? usernameUp : updateData.username}
                                    onChange={(e) => setUsernameUp(e.target.value)}
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
                                    value={emailUp ? emailUp : updateData.email}
                                    onChange={(e) => setEmailUp(e.target.value)}
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
                                    value={passwordUp ? passwordUp : updateData.password}
                                    onChange={(e) => setPasswordUp(e.target.value)}
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

export default FormUpdate
