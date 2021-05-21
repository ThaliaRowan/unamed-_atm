import React from "react";
import {Navbar, Container} from "react-bootstrap";
import "../nav.css";
import MyModal from "./MyModal";

function Nav(){
    return(
        <div>
           <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#" id="userBoard">User's Board</Navbar.Brand>
                    <MyModal/>

                </Container>
            </Navbar> 
        </div>
    )
}

export default Nav;