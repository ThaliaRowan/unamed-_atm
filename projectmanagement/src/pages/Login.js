import React, {useState} from "react";
import "../Login.css";
import {Form, Button} from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    const LogIn = () => {
        axios.post("http://localhost:3000/api/login", {
            email: email,
            password: password
        }, {
            withCredentials: true,
        }).then((response) => {
            console.log(response)
        })
    }

    const getUser = () => {
        axios.get("http://localhost:3000/user", {
                withCredentials: true,
            
        }).then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }
    return(
        <div id="box">
        <div id="container">
            <Form id="signForm">
                <Form.Group id="titleGroup">
                    <Form.Label>
                        <p id="title">
                            Log In
                        </p>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange = {(event) => {
                  setEmail(event.target.value); }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange = {(event) => {
                  setPassword(event.target.value);
                }} />
                </Form.Group>
                <div className="row justify-content-center">                        
                    <Button variant="primary" type="submit" id="button" onClick= {() => {
                        LogIn();
                        getUser();
                    }}>
                        Log In
                    </Button>
                </div>
                <div style={{paddingTop: "10px"}}>
                <Form.Text className="text-muted">
                    Don't have an account? 
                    <Link to="/signup" style={{ textDecoration: 'none' }}> Sign Up</Link>
                </Form.Text>
                </div>
            </Form>
        </div>
    </div>
    
    );
}

export default Login;