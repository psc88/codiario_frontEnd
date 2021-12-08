import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import enrico from '../img/enricoPalermo.jfif';
import pabloc from '../img/pabloCastillo.jfif';
import pablod from '../img/pabloDotti.jfif';
import gabriel from '../img/gabrielAlejandro.jfif';
import marcelo from '../img/marceloMartinez.jfif';
import { Link } from 'react-router-dom';

const AcercaNosotros = () => {
    return (
        <>
            <Container className='text-center'>
                <article className='text-center my-5'>
                    <h1>Nuestra Historia</h1>
                    <p>Somos estudiantes de Desarrollo web Full Stack, apasionados por el desarrollo y la tecnologia. Este espacio es para que nos conozcan un poco mas </p>
                    <hr></hr>
                </article>
                <Row>
                    <Col md={4} sm={12}>
                        <Card className='mt-2 border-0 shadow-lg p-3 mb-5 bg-body rounded'>
                            <Card.Img variant="top rounded-circle p-2" src={pabloc} />
                            <Card.Body>
                                <Card.Title>Pablo Sebastián Castillo</Card.Title>
                                <Card.Text>
                                    Estudiante de Ing. en Sistemas (3er año) y desarrollador web FullStack. Me apasiona programar y enfrantar nuevos retos
                                    <div>
                                        <a href='https://portafolio-pablo-castillo.netlify.app' className='btn btn-primary mt-2' _blank>Conoceme</a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card className='mt-2 border-0 shadow-lg p-3 mb-5 bg-body rounded'>
                            <Card.Img variant="top rounded-circle p-2" src={enrico} />
                            <Card.Body>
                                <Card.Title>Enrico Palermo</Card.Title>
                                <Card.Text>
                                    Estudiante de Ing. en Sistemas (3er año) y desarrollador web FullStack. Me apasiona programar y enfrantar nuevos retos
                                    <div>
                                        <a href='https://portafolio-pablo-castillo.netlify.app' className='btn btn-primary mt-2' _blank>Conoceme</a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card className='mt-2 border-0 shadow-lg p-3 mb-5 bg-body rounded'>
                            <Card.Img variant="top rounded-circle p-2" src={pablod} />
                            <Card.Body>
                                <Card.Title>Pablo Gabriel Dotti</Card.Title>
                                <Card.Text>
                                    Estudiante de Ing. en Sistemas (3er año) y desarrollador web FullStack. Me apasiona programar y enfrantar nuevos retos
                                    <div>
                                        <a href='https://portafolio-pablo-castillo.netlify.app' className='btn btn-primary mt-2' _blank>Conoceme</a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col md={4} sm={12}>
                        <Card className='mt-2 border-0 shadow-lg p-3 mb-5 bg-body rounded'>
                            <Card.Img variant="top rounded-circle p-2" src={marcelo} />
                            <Card.Body>
                                <Card.Title>Marcelo Martinez</Card.Title>
                                <Card.Text>
                                    Estudiante de Ing. en Sistemas (3er año) y desarrollador web FullStack. Me apasiona programar y enfrantar nuevos retos
                                    <div>
                                        <a href='https://portafolio-pablo-castillo.netlify.app' className='btn btn-primary mt-2' _blank>Conoceme</a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card className='mt-2 border-0 shadow-lg p-3 mb-5 bg-body rounded'>
                            <Card.Img variant="top rounded-circle p-2" src={gabriel} />
                            <Card.Body>
                                <Card.Title>Gabriel Alejandro</Card.Title>
                                <Card.Text>
                                    Estudiante de Ing. en Sistemas (3er año) y desarrollador web FullStack. Me apasiona programar y enfrantar nuevos retos
                                    <div>
                                        <a href='https://portafolio-pablo-castillo.netlify.app' className='btn btn-primary mt-2' _blank>Conoceme</a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AcercaNosotros;