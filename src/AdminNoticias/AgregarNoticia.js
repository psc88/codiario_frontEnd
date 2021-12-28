import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {
  validarNombre,
  validarTituloNoticia,
  validarDescripcion,
  validarURL,
} from "../Helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregarNoticia = (props) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [linkImagen, setLinkImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const navegacion = useNavigate();
  const URL = process.env.REACT_APP_API_URL + '/noticias';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validarTituloNoticia(titulo) &&
      validarDescripcion(descripcion) &&
      validarURL(linkImagen) &&
      validarNombre(categoria)
    ) {
      setError(false);

      const noticiaNueva = {
        titulo: titulo,
        descripcion: descripcion,
        linkImagen: linkImagen,
        categoria: categoria
      };

      try {
        const parametros = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noticiaNueva),
        };
        const respuesta = await fetch(URL, parametros);

        if (respuesta.status === 201) {
          Swal.fire(
            "Noticia creada!",
            "La noticia fue correctamente cargada.",
            "success"
          );
          e.target.reset();
          props.consultarAPI();
          navegacion("/admin");
        } else {
          Swal.fire(
            "Oops algo salio mal!",
            "Completa los campos correctamente!",
            "icon: error",
            "danger"
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nueva Noticia</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titulo*</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            maxLength={150}
            placeholder="El dolar se volvio a disparar"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            as="textarea"
            minLength={20}
            maxLength={3000}
            type="text"
            placeholder="Una vez mas, el dolar volvio a superar la barrera de los..."
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Url que contiene la imagen de la noticia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://image.shutterstock.com/z/stock-photo-one-hundred-dollars-dinero-money-dolars-cash-flow-1446368390.jpg"
            onChange={(e) => setLinkImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="Actualidad">Actualidad</option>
            <option value="Espectaculo">Espectáculos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Deporte">Deportes</option>
            <option value="Politica">Política</option>
            <option value="Economia">Economía</option>
            <option value="Salud">Salud</option>
            <option value="Fotografia">Fotografía</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
      {error === true ? (
        <Alert variant="danger" className="mb-5">
          Debe completar todos los campos para cargar una noticia!
        </Alert>
      ) : null}
    </Container>
  );
};

export default AgregarNoticia;
