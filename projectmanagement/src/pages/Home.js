import React from "react";
import {Row, Col, Image, Button} from "react-bootstrap";
import Desk from "../assets/desk.jpg";
import  "../Home.css";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Row>
                <Col>
                    <div id="imgDiv">
                        <Image src={Desk} style={{width: "50rem"}} />
                    </div>
                </Col>
                <Col>
                <Row id="titleDiv">
                    <h1 id="title">
                        TASKAGE
                    </h1>
                </Row>
                <div id="textDiv">
                    <p id="intro">Make self-management easier</p>
                </div>
                <div>
                    <div id="signupDiv"> 
                    <Link to="/signup" style={{ textDecoration: 'none' }}>    
                        <Button variant="outline-secondary" id="signup">Sign Up</Button>
                    </Link>     
                    </div>
                    <div id="loginDiv">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-secondary" id="login">Login</Button>
                    </Link>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
}


export default Home;