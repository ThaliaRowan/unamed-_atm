import React from "react";
import "../Login.css";
import {Form, Button} from "react-bootstrap";


function Login(){
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
                    <Form.Control type="email" placeholder="Email"  />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <div className="row justify-content-center">                        
                    <Button variant="primary" type="submit" id="button">
                        Log In
                    </Button>
                </div>
                <div style={{paddingTop: "10px"}}>
                <Form.Text className="text-muted">
                    Dont have an account? <a href="...">Sign Up</a>
                </Form.Text>
                </div>
            </Form>
        </div>
    </div>
    
    );
}

export default Login;