import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Login = ()=>{
 
    return(
       <Container>
           <div id="background" className="w-100">
               <section id="transparente">
                <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Correo electrónico</Form.Label>
                       <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                       <Form.Text className="text-muted">
                          Nunca compartiremos su correo electrónico con nadie más.
                       </Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Contraseña</Form.Label>
                       <Form.Control type="password" placeholder="contraseña" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Ingresar
                     </Button>
                 </Form>
              </section>
            </div>
         </Container>
    )
}


export default Login;