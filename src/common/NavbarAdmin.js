import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/logo.png'


const NavbarAdmin = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to="/usuario">
              <img
                src={logo}
                width="120"
                height="56"
                className="d-inline-block align-top"
                alt="<CoDiario>"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/usuario" className="nav-link">Noticias</Link>
              <Link to="/nosotros" className="nav-link">Acerca de Nosotros</Link>
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </Nav>
            <Link to="/admin/nuevaNoticia"><Button variant="primary m-1">Nueva noticia</Button></Link>
            <Link to="/listaUsuario"><Button variant="secondary m-1">Usuarios</Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  );
};


export default NavbarAdmin; 