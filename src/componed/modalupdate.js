import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import { Form } from 'react-bootstrap';
function Example({card}) {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState(card.imageUrl);
  const [body, setBody] = useState(card.body);
  const [namee, setNamee] = useState(card.namee);
  const [title, setTitle] = useState(card.title);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Updateproduct = (id) =>{
    axios.put("http://192.168.3.202:3333/api/updatepost/:id"+id,{
        imageUrl:imageUrl,
        body:body,
        namee:namee,
        title:title
    }).then((res)=>console.log(res))
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
        <Form.Control type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)} value={title}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>setNamee(event.target.value)}value={namee}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <Form.Control type="Text" placeholder="Enter your Content" onChange={(event)=>setBody(event.target.value)}value={body} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>imageUrl</Form.Label>
        <Form.Control type="text" placeholder="Enter your imageUrl"  onChange={(event)=>setImageUrl(event.target.value)}value={imageUrl}/>
      </Form.Group>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>Updateproduct(card.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example