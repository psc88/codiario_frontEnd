import React, {useState} from "react";
import { Container} from "react-bootstrap";
import '../App.css';
import { Form, Button } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { validarEmail, validarContraseña } from "../Helpers/helpers";




      const Login = ()=>{
         const navegar = useNavigate();
         const Email= useState('');
         const Contraseña = useState('');
         
         const handleSubmit = (e)=>{
            e.preventDefault();
            //validar campos
            if(validarEmail(Email) && 
             validarContraseña(Contraseña) )
                
            {
               return true;
               navegar ('/inicio')
            }else{
               return false;
               navegar('/admin')
            }
         }

         return(

            
      <Container >
         <div>
            <Form className="my-5 center col-5" onSubmit={handleSubmit}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                  <Form.Text className="text-muted">
                     Nunca compartiremos su correo electrónico con nadie más.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="contraseña"/>
                </Form.Group>
                                
                <Button variant="warning" type="submit">
                        Iniciar Sesión
                 </Button>

                <p>Hola, si aún no eres usuario debes registrarte</p>
                <Link to="/registrarse" className="btn btn-primary">Registrarse</Link>
          </Form>
         </div>
         
      </Container>
      );
      };     

    


export default Login;