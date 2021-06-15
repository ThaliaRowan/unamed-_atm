import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import "../project.css";

function Project(){
    
    const [project, setProject] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/api/projects").then((response) => {
          setProject(response.data);
        })
      }, [project]);
    
    return(
        <div className="grid">   

                {project.map(data => (
                  <div className="row"  key={data.id}> 
                    <div className="col-3 col-sm-4 mb-3" style={{padding: "20px"}} >
                      <Card className="box" id="projCard" border="light" style={{ width: '18rem', height: "18rem" }} >
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