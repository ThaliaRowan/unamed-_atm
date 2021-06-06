import React from "react";
import {Form, Button} from "react-bootstrap";
import "../Signup.css"

function SignUp(){
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <div className="row justify-content-center">                        
                    <Button variant="primary" type="submit" id="button">
                        Submit
                    </Button>
                </div>
                <div style={{paddingTop: "10px"}}>
                <Form.Text className="text-muted">
                    Already have an account? <a href="">Login</a>
                </Form.Text>
                </div>
            </Form>
        </div>
    </div>
    );
};


export default SignUp;