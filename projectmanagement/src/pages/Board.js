import React from "react";
import {Row, Button, Col,Table, Navbar, Container} from "react-bootstrap";
import "../Board.css";

function Board() {
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
                        <Table className="table">
                            <thead>
                                <tr>
                                <th>To-do</th>
                                <th>In progress</th>
                                <th>Done</th>
                                </tr>
                            </thead>
                            <tbody className="tableB">
                            <tr className="tableR">
                                    <td>
                                        <div className="tableD">
                                            write css
                                        </div>
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        
                                    </td>
                            </tr>
                        </tbody>
                        </Table>
                </Row>
            </div>
        </div>
    )
}


export default Board;