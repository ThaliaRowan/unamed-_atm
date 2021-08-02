import React, {useEffect, useState} from "react";
import {Row, Button, Col,Table, Navbar, Container} from "react-bootstrap";
import "../Board.css";
import {DragDropContext, Draggable, Droppable,} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";


const item = {
    id: v4(),
    name: "do css"
}

const item2 = {
    id: v4(),
    name: "do css"
}

console.log(item)

function Board() {

    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: [item]
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
            
                    <div className="theboard">
                      <DragDropContext onDragEnd={e => console.log(e)}>
                        {_.map(state, (data, key) => {
                            return(
                                <div key={key} className="col border border-gray" id={"column"}>
                                    <h3>{data.title}</h3>
                                    <Droppable droppableId={key}>
                                        {(provided) => {
                                            return(
                                                <div 
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={"droppable-col"}
                                                >
                                                    {data.items.map((el, index) => {
                                                        return( 
                                                        <Draggable key={el.id} index={index} draggableId={el.id}>
                                                           {(provided) => {
                                                               return(
                                                                   <div ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}

                                                                   >
                                                                       <div className="colData">
                                                                       {el.name}
                                                                       </div>
                                                                    
                                                                   </div>
                                                               )
                                                           }} 
                                                        </Draggable>                     
                                                        )
                                                    })}    
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>
                            )
                        })}
                      </DragDropContext>
                    </div>
                
            </div>
        </div>
    )
}


export default Board;