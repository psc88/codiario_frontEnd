import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { validarEmail, validarContraseña } from "../Helpers/helpers";

const Login = (props) => {
  const navegar = useNavigate();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuario, setUsuario] = "";
  const listaCompletaUsuarios = [];
  const listaEmpleados = [
   {
     "nombre": "Pablo",
     "apellido": "castillo",
     "usuario": "pablo@codiario.com",
     "contraseña": "Pablo123!"
   },
   {
     "nombre": "Pablo",
     "apellido": "Dotti",
     "usuario": "pablod@codiario.com",
     "contraseña": "PabloD123!"
   },
   {
     "nombre": "Enrico",
     "apellido": "Palermo",
     "usuario": "epalermo@codiario.com",
     "contraseña": "Epalermo132!"
   },
   {
      "nombre": "Gabriel",
      "apellido": "Gomez",
      "usuario": "gabriel@codiario.com",
      "contraseña": "Gabriel132!"
    },
    {
      "nombre": "Marcelo",
      "apellido": "Martinez",
      "usuario": "marcelo@codiario.com",
      "contraseña": "Marcelo132!"
    }
 ];

   listaCompletaUsuarios.push(listaEmpleados);
   console.log(props.usuarios);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar campos
    if (validarEmail(email) && validarContraseña(contraseña)) {
      if (
        usuario === "enrico@codiario.com" && contraseña === "Enrico132" ||
        usuario === "gabriel@codiario.com" && contraseña === "Gabriel132"||
        usuario ==="pabloc@codiario.com" && contraseña === "Pablo132"||
        usuario === "pablod@codiario.com" && contraseña === "Pablo132"||
        usuario ==="marcelo@codiario.com" && contraseña === "Marcelo132"
      ) {
        //props.consultarapi();
        navegar("/navbarAdmin");
        return true;
      } else {
        navegar("/navbarUsuario");
        return false;
      }
    }

    return (
      <Container>
        <div>
          <Form className="my-5 center col-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="contraseña" />
            </Form.Group>

            <Button variant="warning" type="submit">
              Iniciar Sesión
            </Button>

            <p>Hola, si aún no eres usuario debes registrarte</p>
            <Link to="/registrarse" className="btn btn-primary">
              Registrarse
            </Link>
          </Form>
        </div>
      </Container>
    );
  };
};

export default Login;
