import React,{useState} from "react";
import {Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";

function MyModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("");


    const createProject = () => {
        axios.post("http://localhost:3000/api/create", {
          name: name
        }).then(() => {
          console.log("Success")
        })
    }

  
    return (
      <>
        <Button variant="dark" onClick={handleShow} id="add">
          <AddIcon />
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>                  
            <InputGroup>
              <FormControl
                placeholder="Project Name"
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
              
              createProject();
              handleClose();
            }}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
  

export default MyModal;