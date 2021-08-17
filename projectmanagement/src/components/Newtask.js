import React, {useState} from "react";
import {Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import axios from "axios";

function Newtask(){

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [taskname, setName] = useState("");

    const createTask = () => {
        axios.post("http://localhost:3000/api/createtask", {
            taskname:taskname
        }).then(() => {
            console.log("success")
        });
    };

    return(
        <div>
              <>
        <Button variant="secondary" onClick={handleShow}>
          New Task
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>                  
            <InputGroup>
              <FormControl
                placeholder="Task Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
                onChange = {(event) => {
                  setName(event.target.value);
                }}
              />
              </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> {
              
              createTask();
              handleClose();
            }}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        </div>
    )
}


export default Newtask;