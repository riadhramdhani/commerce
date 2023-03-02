import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from "axios"

function Newproduct({card}) {
   

  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [namee, setNamee] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Addnewproduct= () =>{
    axios.post("http://192.168.3.202:3333/api/createnewpost",{
        imageUrl:imageUrl,
        body:body,
        namee:namee,
        title:title
    })
    .then((res)=>console.log(res))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        addnewproduct
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>setNamee(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <Form.Control type="Text" placeholder="Enter your Content" onChange={(event)=>setBody(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>imageUrl</Form.Label>
        <Form.Control type="text" placeholder="Enter your imageUrl"  onChange={(event)=>setImageUrl(event.target.value)}/>
      </Form.Group>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Addnewproduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default  Newproduct;