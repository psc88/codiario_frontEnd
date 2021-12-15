import React, { useState } from "react";
import { Form, Button, Container,} from "react-bootstrap";
import { validarComentario, validarNombre } from "../Helpers/helpers";
import Swal from "sweetalert2";

const Comentador= (props) => {
  const [nombreComentador, setNombreComentador] = useState("");
  const [comentario, setComentario] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(URL);
    if (validarNombre(nombreComentador) && validarComentario(comentario)) {
      const nuevoComentario = {
        nombre: nombreComentador,
        comentario: comentario,
      };
      try {
        const parametro = {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(nuevoComentario),
        };
        
        const respuesta = await fetch(URL, parametro);
        
        if (respuesta.status === 201) {
          Swal.fire("Exito", "Comentario enviado correctamente!", "success");
          e.target.reset()
          props.consultarAPI()

        } else {
            Swal.fire("NO Realizado", "El comentario no se pudo enviar", "error");
        }
      } catch{}
    } else {
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Comentarios</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          onChange={(e) => setNombreComentador(e.target.value)}
        >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          onChange={(e) => setComentario(e.target.value)}
        >
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Max. 400 caracteres"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Comentador;
