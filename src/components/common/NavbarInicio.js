
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from "../../img/Logo.png"

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
                 <Link to="/actualidad" className="nav-link">Actualidad</Link>
                 <Link to="/especaculos" className="nav-link">Espectáculos</Link>
                 <Link to="/tecnologia" className="nav-link">Tecnología</Link>
                 <Link to="/deportes" className="nav-link">Deportes</Link>
                 <NavDropdown title="+ Secciones" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="*/3.1">Política</NavDropdown.Item>
                   <NavDropdown.Item href="*/3.2">Economía</NavDropdown.Item>
                   <NavDropdown.Item href="*/3.3">Salud</NavDropdown.Item>
                   <NavDropdown.Item href="*/3.4">Fotografías</NavDropdown.Item>
                 </NavDropdown>
               </Nav>
               <Link to="/nosotros" className="nav-link">Acerca de Nosotros</Link>
               <Link to="/contacto" className="btn btn-primary">Contacto</Link> 
               <Link to="/login" className="btn btn-warning">Iniciar Sesión</Link>   
                          
             </Navbar.Collapse>
             </Container>
            </Navbar>
      </>
        
    );
};  

export default NavbarInicio; 

