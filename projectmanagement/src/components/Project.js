import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";

function Project(){
    
    const [project, setProject] = useState([]);

    console.log(project);

    useEffect(() => {
        axios.get("http://localhost:3000/api").then((response) => {
          setProject(response.data);
        })
      }, []);
  
    return(
        <div>   
                {project.map(data => (
                        <Card border="light" style={{ width: '18rem', height: "18rem" }}>
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