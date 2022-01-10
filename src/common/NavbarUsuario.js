
import { Navbar, Nav, Container, } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { NavDropdown } from "react-bootstrap";
import logo from "../img/logo.png"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const NavbarUsuario = (props) =>{

  const URLusuarios = process.env.REACT_APP_API_URL + '/usuarios';
  const navegacion = useNavigate();
  const handleClick= this.handleClick;
  

  const handleClick = (e) => {
    console.log('Se hizo click');
    const email = fetch(URLusuarios);


    for (let i = 0; i < props.usuarios.length; i++){
      if(email === props.usuarios.email){
   Swal.fire({
             title: 'Cerar Sesión',
             text: "¿Desea finalizar la sesión?",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Si, deseo salir'
        }).then((result) => {
           if (result.isConfirmed) {
         Swal.fire(
      'Finalizada',
      'Has cerrado sesión',
      'success'
         )
        }
        })
        navegacion('/');
       }else{
           console.log("no hace nada")
         }
    }
    

  }

    return(
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Container>
             <Navbar.Brand>
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
                 <Link to="/usuario" className="nav-link">Inicio</Link>
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
               <Link to="/nosotros"><Button variant="primary m-1">Acerca de Nosotros</Button></Link>
               <Link to="/contacto"><Button variant="warning ">Contacto</Button></Link>
               <Link><Button onClick={this.handleClick} variant="secondary m-1">Cerrar sesión</Button></Link>
               
             </Navbar.Collapse>
             </Container>
            </Navbar>

      </>
        
    );
};  

export default NavbarUsuario; 

