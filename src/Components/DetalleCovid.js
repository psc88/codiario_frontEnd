import React from 'react';
import '../App.css';
import { Col, Row, Image } from 'react-bootstrap';
import mapaArgentina from '../img/mapaArgentina.png'

const DetalleCovid = () => {
    return (
        <section className='p-3 mb-5 bg-dark text-white'>
                <Row>
                    <Col md={6} sm={12}>
                        <article>
                            <Row className='m-3'>
                                <Col md={3}>
                                    <h4>Vacunación en Argentina</h4>
                                </Col>
                                <Col md={3}>
                                    <Image src={mapaArgentina} id='imagenMapaArgentina'></Image>
                                </Col>
                                <Col md={6}>
                                    <h4 className='mb-5'>Personas Vacunadas</h4>
                                    <article className='d-flex'>
                                        <p>Con al menos 1 dosis</p>
                                        <p className='ms-3'>37.124.922</p>
                                    </article>
                                    <hr />
                                    <article className='d-flex'>
                                        <p>Esquema Completo</p>
                                        <p className='ms-3'>30.708.398</p>
                                    </article>
                                </Col>
                            </Row>
                        </article>
                    </Col>
                    <Col md={6} sm={12}>
                        <article>
                            <Row className='m-3'>
                                <Col md={3}>
                                    <h4>Avance del virus en la Argentina</h4>
                                </Col>
                                <Col md={3}>
                                    <Image src={mapaArgentina} id='imagenMapaArgentina'></Image>
                                </Col>
                                <Col md={6}>
                                    <h4 className='mb-5'>Totales</h4>
                                    <article className='d-flex mb-3'>
                                        <p>INFECTADOS</p>
                                        <p className='ms-2'>5.348.123</p>
                                    </article>
                                    <hr className='mt-1'/>
                                    <article className='d-flex'>
                                        <p>RECUPERADOS</p>
                                        <p className='ms-2'>5.206.911</p>
                                    </article>
                                    <hr className='mt-1'/>
                                    <article className='d-flex'>
                                        <p>FALLECIDOS</p>
                                        <p className='ms-2'>116.708</p>
                                    </article>
                                </Col>
                            </Row>
                        </article>
                    </Col>
                </Row>
            </section>
    );
};

export default DetalleCovid;