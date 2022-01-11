import React, { useState, useEffect } from 'react';
import '../App.css';
import { Col, Row, Image } from 'react-bootstrap';
import mapaArgentina from '../img/mapaArgentina.png'

const DetalleCovid = () => {
    const [covidConfirmados, setCovidConfirmados] = useState(0);
    const [covidActivos, setCovidActivos] = useState(0);
    const [covidMuertos, setCovidMuertos] = useState(0);
    const [covidFecha, setCovidFecha] = useState('');
    const [covidMundialConfirmados, setCovidMundialConfirmados] = useState(0);
    const [covidMundialMuertos, setCovidMundialMuertos] = useState(0);

    /*Api covid Argentina */
    useEffect(() => {
        consultaAPICovid();
        consultaApiCovidGlobal();
    }, []);

    const consultaAPICovid = async () => {
        const respuesta = await fetch('https://api.covid19api.com/dayone/country/argentina');
        const dato = await respuesta.json();
        const covidActual = dato[dato.length-1];
        setCovidConfirmados(covidActual.Confirmed);
        setCovidActivos(covidActual.Active);
        setCovidMuertos(covidActual.Deaths);
        setCovidFecha(covidActual.Date.slice(0,10));
    }

    const consultaApiCovidGlobal = async () => {
        const respuesta = await fetch('https://covid.mathdro.id/api');
        const dato = await respuesta.json();
        setCovidMundialConfirmados(dato.confirmed.value);
        setCovidMundialMuertos(dato.deaths.value);
    }

    return (
        <section className='p-3 mb-5 bg-dark text-white'>
                <Row>
                    <Col md={6} sm={12}>
                        <article>
                            <Row className='m-3'>
                                <Col md={3}>
                                    <h4>Avance del virus en el Mundo</h4>
                                </Col>
                                <Col md={3}>
                                    <Image src={mapaArgentina} id='imagenMapaArgentina'></Image>
                                </Col>
                                <Col md={6}>
                                    <h4 className='mb-5'>Totales</h4>
                                    <article className='d-flex'>
                                        <p>CONFIRMADOS:</p>
                                        <p className='ms-3'>{covidMundialConfirmados}</p>
                                    </article>
                                    <hr />
                                    <article className='d-flex'>
                                        <p>FALLECIDOS:</p>
                                        <p className='ms-3'>{covidMundialMuertos}</p>
                                    </article>
                                    <hr />
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
                                        <p>FECHA:</p>
                                        <p className='ms-2'>{covidFecha}</p>
                                    </article>
                                    <hr className='mt-1'/>
                                    <article className='d-flex mb-3'>
                                        <p>INFECTADOS:</p>
                                        <p className='ms-2'>{covidConfirmados}</p>
                                    </article>
                                    <hr className='mt-1'/>
                                    <article className='d-flex'>
                                        <p>ACTIVOS:</p>
                                        <p className='ms-2'>{covidActivos}</p>
                                    </article>
                                    <hr className='mt-1'/>
                                    <article className='d-flex'>
                                        <p>FALLECIDOS:</p>
                                        <p className='ms-2'>{covidMuertos}</p>
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