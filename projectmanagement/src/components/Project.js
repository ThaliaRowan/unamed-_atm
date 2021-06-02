import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import "../project.css";

function Project(){
    
    const [project, setProject] = useState([]);

    console.log(project);

    useEffect(() => {
        axios.get("http://localhost:3000/api").then((response) => {
          setProject(response.data);
        })
      }, []);
  
    return(
        <div className="grid">   

                {project.map(data => (
                  <div className="row">
                    <div className="col-3 col-sm-4 mb-3" style={{padding: "20px"}}>
                      <Card classname="box" id="projCard" border="light" style={{ width: '18rem', height: "18rem" }} key={data.id}>
                        <Card.Header>{data.name}</Card.Header>
                        <Card.Body>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                    </div>
                ))}                       
        </div>
    )
}

export default Project;