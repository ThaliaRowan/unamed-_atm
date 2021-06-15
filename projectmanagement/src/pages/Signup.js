import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import "../Signup.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function SignUp(){
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    const register = () => {
        axios.post("http://localhost:3000/api/register", {
            fullname: fullname,
            email: email,
            password:password
        }).then(() => {
            console.log("Success");
        })
    }
    return(
    <div id="box">
        <div id="container">
            <Form id="signForm">
                <Form.Group id="titleGroup">
                    <Form.Label>
                        <p id="title">
                            SIGN UP
                        </p>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" onChange = {(event) => {
                  setFullname(event.target.value);
                }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange = {(event) => {
                  setEmail(event.target.value);
                }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange = {(event) => {
                  setPassword(event.target.value);
                }}/>
                </Form.Group>
                <div className="row justify-content-center">                        
                    <Button variant="primary" type="submit" id="button" onClick={() => {
                        register();
                    }}>
                        Submit
                    </Button>
                </div>
                <div style={{paddingTop: "10px"}}>
                <Form.Text className="text-muted">
                    Already have an account? 
                    <Link to="/login" style={{ textDecoration: 'none' }}> Login</Link>
                </Form.Text>
                </div>
            </Form>
        </div>
    </div>
    );
};


export default SignUp;