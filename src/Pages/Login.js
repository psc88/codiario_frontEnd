import React from "react";
import { Container, Form} from "react-bootstrap";
import '../App.css';
import {Link} from "react-router-dom";
import { Formik } from "formik";
import {Card, CardBody} from "reactstrap";


const Login = ()=>{
     
        return(

   
         <Container className="p-5">
         <Card>
           <CardBody>
             <Formik
               initialValues={{
                 name: "",
                 email: "",
                 password: "",
                }}
               validate={(values) => {
                 const errors = {};
   
                 // We need a name
                 if (!values.name) errors.name = "Required";
   
                 // We need a valid e-mail
                 if (!values.email) errors.email = "Required";
                 else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                   errors.email = "Invalid email address";
   
                 // We need a valid password
                 if (!values.password) errors.password = "Required";
                 else if (`${values.password}`.length < 7)
                   errors.password =
                     "Password must be larger than 7 characters";
   
                 console.log({ values, errors });
   
                 return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                 setTimeout(() => {
                   alert(JSON.stringify(values, null, 2));
   
                   setSubmitting(false);
                 }, 250);
               }}
             >
               {(props) => {
                 const {
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
                   /* y otras más */
                 } = props;
        

            <Form className="my-5 center col-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label for="name">Nombre y Apellido</Form.Label>
                  <Form.Control type="text"
                      name="name" placeholder="Ingrese su nombre y apellido" invalid={errors.name && touched.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}/>
                 </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Año de Nacimiento</Form.Label>
                  <Form.Control type="date" placeholder="Ingrese año de nacimiento" />
                 </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="formGridCity" placeholder="Ciudad" />
                 </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label for="email" name="email">Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico " invalid={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}/>
                  <Form.Text className="text-muted">
                     Nunca compartiremos su correo electrónico con nadie más.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label for="password" name="password">Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="contraseña" invalid={errors.password && touched.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}/>
                </Form.Group>
                
                <Link to="/" className="btn btn-warning" type="submit" disabled={isSubmitting} >
                    {isSubmitting? `Loading` : `Submit`} Ingresar</Link>
            </Form>
            
           }}
        </Formik>
        </CardBody>
      </Card>
    </Container>)}


  
  export default Login;