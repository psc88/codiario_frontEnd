import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { NavDropdown } from "react-bootstrap";
import logo from "../../img/Logo.png"
import { Button } from "react-bootstrap";

const NavbarAdmin = () =>{
    return(
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Container>
             <Navbar.Brand href="#home">
             <img
                   src={logo}
                   width="120"
                   height="56"
                   className="d-inline-block align-top"
                   alt="<CoDiario>"
                 />
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#noticias">Noticias</Nav.Link>
                 <Nav.Link href="#categorias">Categorias</Nav.Link>
                 <Nav.Link href="#acercanosotros">Acerca de Nosotros</Nav.Link>
                  <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                 <Button variant="primary" type="submit" className="w-30 m-10">
                       Nueva Noticia</Button>
                  <Button variant="warning" type="submit" className="w-30">
                       Nueva Categoria</Button>
             </Navbar.Collapse>
             </Container>
            </Navbar>
      </>
        
    );
};  


export default NavbarAdmin; 