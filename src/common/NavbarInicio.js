import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/logo.png'


const NavbarInicio= () =>{
    return(
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Container>
             <Navbar.Brand>
               <Link to="/">
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
                 <Link to="/" className="nav-link">Inicio</Link>
                </Nav>
                  <Link to="/nosotros" className="nav-link">Acerca de Nosotros</Link>
                  <Link to="/contacto">
                    <Button className="primary m-1">Contacto</Button>
                   </Link> 
                  <Link to="/login">
                     <Button variant="warning m-1">Ingresar</Button>
                   </Link>   
                 </Navbar.Collapse>
             </Container>
          </Navbar>
         </>
        );
};  

export default NavbarInicio;