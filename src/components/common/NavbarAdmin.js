import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from "../../img/Logo.png"


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
                 <Link to="/" className="nav-link">Noticias</Link>
                 <Link to="/categorias" className="nav-link">Categorias</Link>
                 <Link to="/nosotros" className="nav-link">Acerca de Nosotros</Link>
                  <Link to="/contacto" className="nav-link">Contacto</Link>
                </Nav>
                <Link to="" className="btn btn-primary">Nueva noticia</Link> 
                 <Link to="" className="btn btn-warning">Nueva Categoria</Link>
             </Navbar.Collapse>
             </Container>
            </Navbar>

            <h1>Aqui lleva mensaje de bienvenida</h1>
      </>
        
    );
};  


export default NavbarAdmin; 