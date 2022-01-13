import React, { useState } from "react";
import { Form, Button, Container, Alert} from "react-bootstrap";
import { validarComentario, validarNombre } from "../Helpers/helpers";
import Swal from "sweetalert2";

const Comentador = (props) => {
  const [nombreComentador, setNombreComentador] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL + '/comentarios';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarNombre(nombreComentador) && validarComentario(comentario)) {
      const nuevoComentario = {
        nombreComentador,
        comentario,
      };
      setError(false);
      try {
        const parametro = {
          method: "POST",
          headers: { "Content-Type": "application/json", },
          body: JSON.stringify(nuevoComentario),
        };
        const respuesta = await fetch(URL, parametro);
        if (respuesta.status === 201) {
          Swal.fire("Exito", "Comentario enviado correctamente!", "success");
          e.target.reset();
          setNombreComentador('');
          setComentario('');
          props.consultarApi();
          
        } else {
          Swal.fire("NO Realizado", "El comentario no se pudo enviar", "error");
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Comentarios</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <Form.Group
            className="mb-3 w-50"
            onChange={(e) => setNombreComentador(e.target.value)}
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            className="mb-3 w-50"
            onChange={(e) => setComentario(e.target.value)}
          >
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Max. 400 caracteres"
              style={{ height: "100px" }}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="primary fs-5" type="submit">
            Guardar
          </Button>
        </div>
        {error === true ? (
        <Alert variant="danger" className="mb-5">
          Debe completar todos los campos para cargar una noticia!
        </Alert>
      ) : null}
      </Form>
    </Container>
  );
};

export default Comentador;
