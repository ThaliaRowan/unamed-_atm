import React, {useEffect, useState} from "react";
import {Row, Button, Col,Table, Navbar, Container} from "react-bootstrap";
import "../Board.css";


const items = {
    id: "jsgsttstrraa",
    name: "do css"
}

function Board() {

    const [state, useState] = useState(initialState: {
        "todo": {
            title: "Todo",
            items: []
        },
        "in-progress": {
            title: "In Progress",
            items: []
        },
        "done": {
            title: "Done",
            items: []
        }
    })


    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand id="userBoard">User's Board</Navbar.Brand>

                </Container>
            </Navbar> 
            <div>
                <Row id="firstRow">
                    <Col md={{ span: 10, offset: 10 }}>
                     <Button variant="secondary">New Task</Button>
                    </Col>
                </Row>
                <Row className="tableRow">
                      
              
                </Row>
            </div>
        </div>
    )
}


export default Board;