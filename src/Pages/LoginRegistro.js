

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validarEmail, validarContraseña, validarCampoRequerido, validarNumero } from "../Helpers/helpers";
import Swal from 'sweetalert2'

const LoginRegistro = () => {
    const [nombreYApellido, setNombreYApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);
    const navegacion = useNavigate();

    const URL = process.env.REACT_APP_API_URL + '/usuarios';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarCampoRequerido(nombreYApellido) &&
            validarNumero(edad) &&
            validarCampoRequerido(ciudad) &&
            validarEmail(email) &&
            validarContraseña(contraseña)
        ) {
            setError(false);
            const nuevoUsuario = {
                nombreYApellido,
                edad,
                ciudad,
                email,
                contraseña
            }
            console.log(nuevoUsuario)
            try {
                const parametros = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoUsuario)
                }
                const respuesta = await fetch(URL, parametros);
                if (respuesta.status === 201) {
                    Swal.fire(
                        'Usuario Registrado',
                        'El registro fue realizado correctamente',
                        'success'
                    )
                    navegacion('/usuario');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'el usuariono NO fue registrado',
                        footer: '<a href="/registrarse">Intentenlo nuevamente</a>'
                    })
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setError(true);
        }
    }

    return (
        <Container>
            <div className="d-flex flex-column align-items-center">
                <Form className="my-5 center col-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control
                            required
                            type="inlineFormInputName"
                            placeholder="Ingrese su nombre y apellido"
                            onChange={(e) => setNombreYApellido(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingrese edad"
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                            required
                            type="formGridCity"
                            placeholder="Ciudad"
                            onChange={(e) => setCiudad(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            required
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
                            required
                            type="password"
                            placeholder="contraseña"
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="warning" type="submit" className="w-100">Registrarse</Button>
                </Form>
                <div className="center col-5">
                    {error === true ? 
                    <Alert variant='danger' className='mb-5 text-center'>
                        Verifique los campos
                    </Alert> : null}
                </div>
            </div>
        </Container>
    );
};

export default LoginRegistro;