import React, { useState } from "react";
import '../App.css';
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { validarEmail, validarContraseña, error } from "../Helpers/helpers";
import Swal from "sweetalert2";

const Login = (props) => {
   const navegar = useNavigate();
   const [email, setEmail] = useState('');
   const [contraseña, setContraseña] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validarEmail(email) && validarContraseña(contraseña)) {
         for (let i = 0; i < props.usuarios.length; i++) {
            if ((email === "enrico@codiario.com" && contraseña === "12345678Enrico") ||
               (email === "abriel@codiario.com" && contraseña === "1234") ||
               (email === "pabloc@codiario.com" && contraseña === "1234") ||
               (email === "pablod@codiario.com" && contraseña === "12345678Marce")
            ) {
               console.log('usuario admin')
               break;
            } else if (props.usuarios[i].email === email && props.usuarios[i].contraseña === contraseña) {
               console.log('usuario comun')
               console.log(props.usuarios[i].email)
               console.log(props.usuarios[i].contraseña)
               navegar("/ ")
               break;
            }
         }
      } else {
         Swal.fire(
            "Oops algo salio mal!",
            "Usuario o contraseña incorrecta",
            "icon: error",
            "danger"
         );
      }
   }

   return (
      <Container>
         <div className="d-flex justify-content-center">
            <Form className="my-5 center col-5" onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                     Nunca compartiremos su correo electrónico con nadie más.
                  </Form.Text>
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="contraseña" onChange={(e) => setContraseña(e.target.value)} />
                  <Form.Text className="text-muted">
                     Debe contener entre 8 y 16 digitos, una mayuscula, una minuscula y sin simbolos.
                  </Form.Text>
               </Form.Group>
               <div className="d-flex justify-content-center mb-5">
                  <Button variant="warning" type="submit">
                     Iniciar Sesión
                  </Button>
               </div>
               <article className="text-center">
                  <p className="fs-4">Si aún no eres usuario debes registrarte</p>
                  <Link to="/registrarse" className="btn btn-primary">Registrarse</Link>
               </article>
            </Form>
         </div>
      </Container>
   );
};

export default Login;