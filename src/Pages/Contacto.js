import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  error,
  acierto,
  validarNombre,
  validarNumero,
  validarComentario,
} from "../Helpers/helpers.js";

import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
init("user_OVQcZD71YLsJOeqIJhZKK");

const Contacto = () => {
  const [nombreContacto, setNombreContacto] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar todos los input
    if (
      validarNombre(nombreContacto) &&
      validarNumero(telefonoContacto) &&
      validarComentario(comentarios)
    ) {
      acierto();
      const contactoNuevo = {
        from_name: nombreContacto,
        telefono: telefonoContacto,
        message: comentarios,
        mail: mail,
      };
      emailjs
        .send(
          "service_26rlmp1",
          "template_kenlejx",
          contactoNuevo,
          "user_OVQcZD71YLsJOeqIJhZKK"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    } else {
      error();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-2 display-2 ">Contacto</h1>
      <Form
        className="container my-5 bg-light rounded py-1"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan Pérez"
            onChange={(e) => setNombreContacto(e.target.value)}
          />
          <div className="valid-feedback">Este campo es correcto</div>
          <div className="invalid-feedback">Este campo es obligatorio</div>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="juanperez@gmail.com"
            onChange={(e) => setMail(e.target.value)}
          />

          <div className="valid-feedback">Este campo es correcto</div>
          <div className="invalid-feedback">Este campo es obligatorio</div>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicNumber">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="54 9 11 12345678"
            onChange={(e) => setTelefonoContacto(e.target.value)}
          />
          <div className="valid-feedback">Este campo es correcto</div>
          <div className="invalid-feedback">Este campo es obligatorio</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comentarios</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Ingrese su consulta"
            onChange={(e) => setComentarios(e.target.value)}
          />

          <div className="valid-feedback">Este campo es correcto</div>
          <div className="invalid-feedback">Este campo es obligatorio</div>
        </Form.Group>
        <div className="my-4 d-grid gap-2">
          <Button variant="primary" type="submit">
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contacto;
