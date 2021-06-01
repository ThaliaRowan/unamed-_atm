import React from "react";
import {Card} from "react-bootstrap";

function Project(props){
    
    return(
        <div>     
            {props.project.map(data => (
                           
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Header>{data.name}</Card.Header>
            <Card.Body>
            <Card.Text>
            </Card.Text>
            </Card.Body>
        </Card>
            ))}    
        </div>
    )
}

export default Project;