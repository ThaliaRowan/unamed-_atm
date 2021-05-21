import React from "react";
import {Navbar, Container, Button} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import "../nav.css";

function Nav(){
    return(
        <div>
           <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#" id="userBoard">User's Board</Navbar.Brand>
                    <Button variant="outline-dark" id="add"><AddIcon /></Button>

                </Container>
            </Navbar> 
        </div>
    )
}

export default Nav;