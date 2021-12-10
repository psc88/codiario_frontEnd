import { Navbar, Nav, Container, } from "react-bootstrap";
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


const NavbarUsuario = () =>{
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
                 <Nav.Link href="#actualidad">Actualidad</Nav.Link>
                 <Nav.Link href="#espectaculos">Espectáculos</Nav.Link>
                 <Nav.Link href="#tecnologia">Tecnología</Nav.Link>
                 <Nav.Link href="#deportes">Deportes</Nav.Link>
                 <NavDropdown title="+ Secciones" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Política</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Economía</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Salud</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Fotografías</NavDropdown.Item>
                   </NavDropdown>
               </Nav>
               <Nav.Link href="#acercanosotros">Acerca de Nosotros</Nav.Link>
               <Nav.Link href="#contacto">Contacto</Nav.Link>
               <Button variant="primary" type="submit" className="w-30 m-10">
                    Suscribirse</Button>
             </Navbar.Collapse>
             </Container>
            </Navbar>
      </>
        
    );
};  


export default NavbarUsuario; 