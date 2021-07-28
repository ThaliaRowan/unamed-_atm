import React, {useRef, useEffect, useState} from "react";
import {Row, Button, Col,Table, Navbar, Container} from "react-bootstrap";
import "../Board.css";

function Board() {

    const [isTrue, setTrue] = useState(false);

    let draggables = useRef();
    const container = useRef();


        function addDrag(){
           setTrue(true);
        }

        function removeDrag(){
            setTrue(false)
        }


        useEffect(() => {

            window.addEventListener('dragstart', addDrag);
            window.addEventListener('dragend', removeDrag);
            return () => {
                
            window.removeEventListener('dragstart', addDrag);
            window.addEventListener('dragend', removeDrag);
            }


        }, []);



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
                                    <td  className="draggable" ref={container} >
                                        <div className={ isTrue ? "dragging" : "tableD"} draggable="true" ref={draggables}>
                                            write css
                                        </div>
                                    </td>
                                    <td >
                                        <div draggable="true" className="draggable">

                                        </div>
                                    </td>
                                    <td>
                                        <div  draggable="true" className="draggable">

                                        </div>
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