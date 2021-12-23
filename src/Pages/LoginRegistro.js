
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { validarEmail, validarEmail, validarCampoRequerido } from " ../Helpers/helpersLogin";
import Swal from 'sweetalert2'

const LoginRegistro = () => {
  const [NombreYApellido, setNombreYApellido] = useState("");
  const [Edad, setEdad] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const navegacion = useNavigate();



  const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log('prueba')
      //valida los campos
      if(validarCampoRequerido(NombreYApellido) &&
      validarCampoRequerido(Edad) &&
      validarCampoRequerido(Ciudad) &&
      validarEmail(Email) &&
      validarContraseña(Contraseña)
      ){
          setError(false);
          //crear objeto
          const nuevoUsuario ={
            NombreYApellido: NombreYApellido,
            Edad: Edad,
            Ciudad: Ciudad,
            Email: Email,
            Contraseña: Contraseña
          }
          console.log(nuevoUsuario)
          //enviar objeto a la API - POST
         try{
             const parametros ={
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify(nuevoUsuario)
             }
                 const respuesta = await fetch(URL, parametros);
                 if(respuesta.status === 201){
                     //mensaje de registro a usuario
                     Swal.fire(
                        'Usuario Registrado',
                        'El registro fue realizado correctamente',
                        'success'
                      )
                      //consultar API
                      //props.consultarAPI();
                   // redireccionar a usuario/lector
                   navegacion('/login');

                 }else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'el usuariono NO fue registrado',
                    footer: '<a href="/registrarse">Intentenlo nuevamente</a>'
                  })
                   }
         }catch(error){
             console.log(error);
         }
      } else {
          //mensaje informativo al usuario
          setError(true);
      }
     }

  return (
    <Container>
      <div>
        <Form className="my-5 center col-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="inlineFormInputName"
              placeholder="Ingrese su nombre y apellido"
              onChange={(e) => setNombreYApellido(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="age"
              placeholder="Ingrese edad"
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="formGridCity"
              placeholder="Ciudad"
              onChange={(e) => setCiudad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico "
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="contraseña"
              onChange={(e) => setContraseña(e.target.value)}
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">Registrarse</Button> 
           
          
        </Form>
       { error === true ? <Alert variant='danger' className='mb-5'>
          Debe completar todos los campos
        </Alert>: null }
      </div>
    </Container>
  );
};

export default LoginRegistro;
