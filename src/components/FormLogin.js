import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




import './form.css';

function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit =  (e) => {
        e.preventDefault()
        if( email !== "" && password !== "") {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('success', user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error', errorCode, errorMessage)
            });
            setError(false);
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
                            Form Register
                            </h1>
                            {error && <h2>Isi cukk!!!</h2>}
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

export default FormLogin
