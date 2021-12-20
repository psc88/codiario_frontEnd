import React, { useState } from 'react';
import '../App.css';
import { Image, Container, Row, Button } from 'react-bootstrap';
import DetalleCovid from '../Components/DetalleCovid'
import publicidadLolla from '../img/Publicidad/publicidadLolla1.gif'
import publicidadNaranjax from '../img/Publicidad/publicidadNaranjax.gif'
import Publicidad from '../Components/Publicidad';
import ItemNoticiasPrincipales from '../Components/ItemNoticiasPrincipales';
import ItemNoticias from '../Components/ItemNoticias';


const Inicio = (props) => {
    const [paginaActual, setPaginaActual] = useState(1);
    const [ultimaPagina] = useState(3);
    console.log(props.noticias)
    

    /*FILTROS DE NOTICIAS POR CATEGORIA */
    const noticiasPrincipales = props.noticias.filter(noticias => noticias.categoria === 'Principales');
    const noticiasActualidad = props.noticias.filter(noticias => noticias.categoria === 'Actualidad');
    const noticiasPolitica = props.noticias.filter(noticias => noticias.categoria === 'Politica');
    const noticiasDeporte = props.noticias.filter(noticias => noticias.categoria === 'Deporte');
    console.log(noticiasPrincipales)
    const indiceUltimaPublicacion = paginaActual * ultimaPagina
    const indicePrimeraPublicacion = indiceUltimaPublicacion - ultimaPagina

    /*FUNCIONES PARA LIMITAR LAS NOTICIAS QUE SE VEAN*/
    const cantidadNoticiasActualidad = noticiasActualidad.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasPolitica = noticiasPolitica.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)
    const cantidadNoticiasDeporte = noticiasDeporte.slice(indicePrimeraPublicacion, indiceUltimaPublicacion)

    const totalNoticias = props.noticias.length;

    const paginas = (numeroPagina) => setPaginaActual(numeroPagina);

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
                            noticiasPrincipales.map((noticias) =>
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
                                    <ItemNoticias key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticias>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Button className='fs-4'>Ver Mas</Button>
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
                                    <ItemNoticias key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticias>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Button className='fs-4'>Ver Mas</Button>
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
                                    <ItemNoticias key={noticias.id} noticias={noticias} consultarAPI={props.consultarApi}></ItemNoticias>)
                            }
                        </Row>
                    </article>
                    <article className='d-flex justify-content-center'>
                        <Button className='fs-4'>Ver Mas</Button>
                    </article>
                </article>
            </Container>
        </>
    );
};

export default Inicio;