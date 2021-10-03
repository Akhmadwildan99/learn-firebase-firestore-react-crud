import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, setDoc } from "firebase/firestore";
import { db} from '../firebase.config';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {Row, Col, Container } from 'react-bootstrap';
import './form.css';

export default function Form() {
    const [username, setUsername] = useState("");
    const [score, setScore] = useState(0);
    // const [images, setImages] = useState(null);
    const [error, setError] = useState(false);

    const handleChangeFiles = async (e) => {
        let file = e.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, file.name);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(username !== "" && score !== undefined) {
            const id = localStorage.getItem("userId");
            const userId = JSON.parse(id);
            console.log(userId);
            const data = {
                username,
                score,
            }
            try {
                const res = await setDoc(doc(db, "player", userId ), data);
                console.log(res);
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
                                    type="file"
                                    name='images'
                                    placeholder='Upload here'
                                    onChange={handleChangeFiles}
                                />
                                <br/>
                            </div>
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
                                    placeholder='Enter your Score'
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
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