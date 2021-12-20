import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {
  validarNombre,
  validarTituloNoticia,
  validarURL,
} from "../Helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregarNoticia = (props) => {
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionNoticia, setDescripcionNoticia] = useState("");
  const [urlNoticia, setUrlNoticia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const navegacion = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validarTituloNoticia(tituloNoticia) &&
      validarNombre(descripcionNoticia) &&
      validarURL(urlNoticia) &&
      validarNombre(categoria)
    ) {
      setError(false);

      const noticiaNueva = {
        tituloNoticia: tituloNoticia,
        descripcionNoticia: descripcionNoticia,
        urlNoticia: urlNoticia,
        categoria: categoria,
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
            onChange={(e) => setTituloNoticia(e.target.value)}
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
            onChange={(e) => setDescripcionNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Url que contiene la imagen de la noticia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://image.shutterstock.com/z/stock-photo-one-hundred-dollars-dinero-money-dolars-cash-flow-1446368390.jpg"
            onChange={(e) => setUrlNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="actualidad">Actualidad</option>
            <option value="espectaculos">Espectáculos</option>
            <option value="tecnologia">Tecnología</option>
            <option value="deportes">Deportes</option>
            <option value="politica">Política</option>
            <option value="economia">Economía</option>
            <option value="salud">Salud</option>
            <option value="fotografia">Fotografía</option>
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
