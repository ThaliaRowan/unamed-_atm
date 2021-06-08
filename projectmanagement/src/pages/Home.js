import React from "react";
import {Row, Col, Image, Button} from "react-bootstrap";
import Desk from "../assets/desk.jpg";
import  "../Home.css";

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
                    <Button variant="outline-secondary" pat id="signup" >Signup</Button>
                    </div>
                    <div id="loginDiv">
                    <Button variant="outline-secondary" id="login">Login</Button>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
}


export default Home;