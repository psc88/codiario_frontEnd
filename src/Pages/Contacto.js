import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import React from "react";

const Contacto = () => {
  return (
    <div className="container">
        <h1 className="text-center my-2 display-2 ">Contacto</h1>
      <Form className="container my-5 bg-light rounded py-1">
      <Form.Group className="mb-2" controlId="formBasicName">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Juan Pérez" />
          </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="email" placeholder="juanperez@gmail.com" />
          
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicNumber">
      <Form.Label>Teléfono</Form.Label>
      <Form.Control type="text" placeholder="+54 9 11 12345678" />
</Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;
