import React, {useState} from 'react';
import '../App.css';
import { Col, Row, Image, Container } from 'react-bootstrap';
import DetalleCovid from '../Components/DetalleCovid';
import bolsonaro from '../img/bolsonaro.jpg'
import jugadores from '../img/jugadores.jfif'
import pobresa from '../img/pobresa.jpg'
import publicidadYpf from '../img/publicidadYpf.png'
import Noticias from '../Components/Noticias';
import Paginacion from '../Components/Paginacion';

const Inicio = (props) => {
    const [paginaActual, setPaginaActual] = useState(1);
    const [paginaSiguiente, setPaginaSiguiente] = useState(6);
    const indiceUltimaPublicacion = paginaActual * paginaSiguiente
    const indicePrimeraPublicacion = indiceUltimaPublicacion - paginaSiguiente
    const publicacionActual = props.noticias.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    
    return (
        <>
            <DetalleCovid></DetalleCovid>
            <Container className='mb-3'>
                <article>
                    <Row>
                        <Col md={8} sm={12}>
                            <h1>Malestar de Bolsonaro con Alberto Fernández por el acto con Lula: canceló la cumbre de presidentes del Mercosur en Brasilia</h1>
                            <p>El gobierno brasileño confirmó que el encuentro, que iba a ser presencial, pasará a ser virtual. Alegaron que es por el avance de la Ómicron, pero en el ámbito diplomático lo vinculan a la presencia del ex mandatario en Plaza de Mayo</p>
                            <Image src={bolsonaro} fluid ></Image>
                            <hr className='mt-1' />
                        </Col>
                        <Col md={4} sm={12} >
                            <section>
                                <article>
                                    <h4>Boca Juniors venció a Talleres de Córdoba por penales y es campeón de la Copa Argentina</h4>
                                    <Image src={jugadores} fluid ></Image>
                                    <hr className='mt-1' />
                                </article>
                                <article>
                                    <h4>Unicef: Argentina tiene 3,8 millones de chicos pobres y con derechos fundamentales vulnerados</h4>
                                    <Image src={pobresa} fluid ></Image>
                                    <hr className='mt-1' />
                                </article>
                            </section>
                        </Col>
                    </Row>
                </article>
                <article className='text-center'>
                    <p>PUBLICIDAD</p>
                    <a href="#"><Image src={publicidadYpf} className='my-5' fluid></Image></a>
                </article>
                <article>
                    <Noticias noticias={publicacionActual}></Noticias>
                    <article className='d-flex justify-content-center'>
                    </article>
                </article>
            </Container>
        </>
    );
};

export default Inicio;