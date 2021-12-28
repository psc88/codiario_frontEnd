import React, { useState } from 'react';
import '../App.css';
import { Image, Container, Row } from 'react-bootstrap';
import DetalleCovid from '../Components/DetalleCovid'
import publicidadLolla from '../img/Publicidad/publicidadLolla1.gif'
import publicidadNaranjax from '../img/Publicidad/publicidadNaranjax.gif'
import Publicidad from '../Components/Publicidad';
import ItemNoticiasPrincipales from '../Components/ItemNoticiasPrincipales';
import ItemNoticiasUsuario from '../Components/ItemNoticiasUsuario';
import { Link } from 'react-router-dom';


const Inicio = (props) => {
    const [paginaActual] = useState(1);
    const [ultimaPagina] = useState(3);
    const [paginaActualPrincipal] = useState(1);
    const [ultimaPaginaPrincipal] = useState(4);

    /*FILTROS DE NOTICIAS POR CATEGORIA */
    const noticiasPrincipales = props.noticias.filter(noticias => noticias.categoria === 'Principales');
    const noticiasActualidad = props.noticias.filter(noticias => noticias.categoria === 'Actualidad');
    const noticiasPolitica = props.noticias.filter(noticias => noticias.categoria === 'Politica');
    const noticiasDeporte = props.noticias.filter(noticias => noticias.categoria === 'Deporte');
    const noticiasEspectaculos = props.noticias.filter(noticias => noticias.categoria === 'Espectaculo');
    const noticiasEconomia = props.noticias.filter(noticias => noticias.categoria === 'Economia');
    const noticiasSalud = props.noticias.filter(noticias => noticias.categoria === 'Salud');
    const noticiasFotografia = props.noticias.filter(noticias => noticias.categoria === 'Fotografia');
    const noticiasTecnologia = props.noticias.filter(noticias => noticias.categoria === 'Tecnologia');

    const tituloActualidad = 'Actualidad'
    const tituloDeporte = 'Deporte'
    const tituloPolitica = 'Politica'
    const tituloEspectaculos = 'Espectaculos'
    const tituloEconomia = 'Economia'
    const tituloSalud = 'Salud'
    const tituloFotografia = 'Fotografia'
    const tituloTecnologia = 'Tecnologia'

    /*FUNCIONES PARA LIMITAR LAS NOTICIAS QUE SE VEAN*/
    const indiceUltimaPublicacion = paginaActual * ultimaPagina
    const indicePrimeraPublicacion = indiceUltimaPublicacion - ultimaPagina
    const indiceUltimaPublicacionPrincipal = paginaActualPrincipal * ultimaPaginaPrincipal
    const indicePrimeraPublicacionPrincipal = indiceUltimaPublicacionPrincipal - ultimaPaginaPrincipal

    const cantidadNoticiasPrincipal = noticiasPrincipales.slice(indicePrimeraPublicacionPrincipal, indiceUltimaPublicacionPrincipal)
    const cantidadNoticiasActualidad = noticiasActualidad.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasPolitica = noticiasPolitica.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasDeporte = noticiasDeporte.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasEspectaculos = noticiasEspectaculos.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasEconomia = noticiasEconomia.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasSalud = noticiasSalud.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasFotografia = noticiasFotografia.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasTecnologia = noticiasTecnologia.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)


    /*Funciones de filtrado de noticias para App.js */
    const handleActualidad = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasActualidad, tituloActualidad);
    }
    const handleDeporte = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasDeporte, tituloDeporte);
    }
    const handlePolitica = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasPolitica, tituloPolitica);
    }
    const handleEspectaculo = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasEspectaculos, tituloEspectaculos);
    }
    const handleEconomia = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasEconomia, tituloEconomia);
    }
    const handleSalud = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasSalud, tituloSalud);
    }
    const handleFotografia = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasFotografia, tituloFotografia);
    }
    const handleTecnologia = () => {
        const handleNoticiaFiltrada = props.handleNoticiaFiltrada;
        handleNoticiaFiltrada(noticiasTecnologia, tituloTecnologia);
    }

    // const totalNoticias = props.noticias.length;

    // const paginas = (numeroPagina) => setPaginaActual(numeroPagina);

    /*Noticias Principales */
    // const [paginaActualPrincipal] = useState(1);
    // const [ultimaPaginaPrincipal, setUltimaPaginaPrincipal] = useState(0);

    // const indiceUltimaPublicacionPrincipal = paginaActualPrincipal * ultimaPaginaPrincipal
    // const indicePrimeraPublicacionPrincipal = indiceUltimaPublicacionPrincipal - ultimaPaginaPrincipal
    // const publicacionActualPrincipal = noticiasPrincipalesx2.slice(indicePrimeraPublicacionPrincipal, indiceUltimaPublicacionPrincipal)
    return (
        <>
            <DetalleCovid></DetalleCovid>
            <Container className='mb-3'>
                <article>
                    <Row className='text-center'>
                        <h1 className='text-center'>Noticias Principales</h1>
                        {
                            cantidadNoticiasPrincipal.map((noticias) =>
                                <ItemNoticiasPrincipales key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasPrincipales>)
                        }
                    </Row>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='d-flex justify-content-center'>
                        <Image src={publicidadLolla} className='mb-5 d-flex justify-content-center' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Actualidad</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasActualidad.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleActualidad}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <Publicidad></Publicidad>
                    <h1 className="text-center mb-5">Deporte</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasDeporte.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleDeporte}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Politica</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasPolitica.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handlePolitica}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Espectaculos</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasEspectaculos.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleEspectaculo}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Economía</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasEconomia.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleEconomia}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Salud</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasSalud.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleSalud}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Tecnología</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasTecnologia.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleTecnologia}>Ver mas</Link>
                    </article>
                </article>
                <article>
                    <p className='fw-bold mt-2 py-3 text-center'>PUBLICIDAD</p>
                    <div className='text-center'>
                        <Image src={publicidadNaranjax} className='mb-5' fluid></Image>
                    </div>
                    <h1 className="text-center mb-5">Fotografía</h1>
                    <article className='my-5'>
                        <Row className='d-flex justify-content-center'>
                            {
                                cantidadNoticiasFotografia.map((noticias) =>
                                    <ItemNoticiasUsuario key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticiasUsuario>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Link to="/categoria" className="btn btn-primary fs-4" onClick={handleFotografia}>Ver mas</Link>
                    </article>
                </article>
            </Container>
        </>
    );
};

export default Inicio;