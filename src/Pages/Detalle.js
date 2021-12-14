import React from 'react';
import Titulo from '../components/Titulo';
import Subtitulo from '../components/Subtitulo';
import Cuerpo from '../components/Cuerpo';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Foto from '../components/Foto';
import Comentador from '../components/Comentador';
import CajaComentarios from '../components/CajaComentarios'
import {useState, useEffect} from 'react';

const Detalle = () => {
    const [comentarios,setComentarios] = useState([]);
    const URL = process.env.REACT_APP_API_URL
    useEffect(()=>{
      consultarAPI()
    },[])
  
    const consultarAPI = async() =>{
      try{
        const respuesta = await fetch(URL);
        const datos = await respuesta.json();
        setComentarios(datos)
      }catch(error){
        console.log(error)
      }
    }

    return (
        <Container>
            <Row>
                <Col lg={12} className='mt-5'>
                    <Titulo/>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <Subtitulo/>
                    <Foto/>
                    <Cuerpo/>
                </Col>
                <Col lg={4}>
                    <section className='row mt-5'>
                        <h6 className='text-center'>ESPACIO PUBLICITARIO</h6>
                        <div className='border border-danger col-lg-6'>publicidad 1</div>
                        <div className='border border-warning col-lg-6'>Publicidad 2</div>
                        <div className='border border- col-lg-6'>Publicidad 3</div>
                        <div className='border border-info col-lg-6'>Publicidad 4</div>
                    </section>
                </Col>
                <Col lg={12}>
                    <Comentador consultarAPI={consultarAPI}/>
                    <CajaComentarios comentarios={comentarios} consultarAPI={consultarAPI}></CajaComentarios>
                </Col>
            </Row>
        </Container>
    );
};

export default Detalle;