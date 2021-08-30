import React, {useEffect, useState} from "react";
import {Row, Button, Col,Table, Navbar, Container} from "react-bootstrap";
import "../Board.css";
import {DragDropContext, Draggable, Droppable,} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import Newtask from "../components/Newtask";
import axios from "axios";

const item = {
    id: v4(),
    name: "do css"
}

const item2 = {
    id: v4(),
    name: "do javascript"
}

console.log(item)

function Board() {

    
    const [Task, setTask] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/api/tasks").then((response) => {
          setTask(response.data);
        })
      }, [Task]);

        console.log(Task);

    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: [Task]
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

    const handleDragEnd = ({destination, source}) => {
        console.log("from", source)
        console.log("to", destination)

        if (!destination){
            return 
        }

        if(destination.index === source.index && destination.droppableId === source.droppableId){
            return
        }

        const itemCopy = {...state[source.droppableId].items[source.index]}
        setState(prev => {
            prev = {...prev}
            prev[source.droppableId].items.splice(source.index, 1)

            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }

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
                     <Newtask />
                    </Col>
                </Row>
            
                    <div className="theboard">
                      <DragDropContext onDragEnd={handleDragEnd}>
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
                                                                       {el.taskname}
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