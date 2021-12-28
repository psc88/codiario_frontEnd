import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../img/Logo.png";
import E404 from "../img/E404.png";
import { Link } from "react-router-dom";

const error404 = () => {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="text-center my-3"
        >
          <img src={Logo} alt="logo CoDiario"/>
        </Col>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="text-center"
        >
          <p className="display-5 text-primary font-monospace fw-bold mt-2">
            Pagina no encontrada
          </p>
        </Col>
        <Col className="text-center">
        <img src={E404} alt="imagen error 404" />
        </Col>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="text-center my-3"
        >
          <p className="display- font-monospace mt-2 text-warning">
            El sitio que esta buscando no existe o no se encuentra disponible en
            este momento, por favor revise su conexion o la direccion ingresada.
          </p>
        </Col>
        <Col lg={12} md={12} sm={12} className="text-center my-5">
            <Link to='/' className="btn btn-warning m-2">Vover al Home</Link>
            <Link to='/' className="btn btn-warning m-2">Selector de categorias</Link>
            <Link to='/contacto' className="btn btn-warning m-2">Contactenos</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default error404;