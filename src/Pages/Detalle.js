import React from 'react';
import Titulo from '../Components/Titulo';
import Subtitulo from '../Components/Subtitulo';
import Cuerpo from '../Components/Cuerpo';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Foto from '../Components/Foto';
import Comentador from '../Components/Comentador'
import CajaComentarios from '../Components/CajaComentarios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const Detalle = (props) => {
    const { id } = useParams();
    const [comentarios,setComentarios] = useState([]);
    const [noticiaSeleccionada,setNoticiaSeleccionada] = useState([]);
    const URL = process.env.REACT_APP_API_URL + "/comentarios"
    const URLn = process.env.REACT_APP_API_URL + "/noticias/" + id
    console.log(id)
    
    useEffect(()=>{
      consultarAPI()
      creador()
    },[])
  
    const creador =async()=>{
        try{
            const respuestaN = await fetch(URLn);
            const datosN = await respuestaN.json();
            setNoticiaSeleccionada(datosN)
          }catch(error){
            console.log(error)
          }
    }
    const consultarAPI = async() =>{
      try{
        const respuesta = await fetch(URL);
        const datos = await respuesta.json();
        setComentarios(datos)
      }catch(error){
        console.log(error)
      }
    }
   console.log(noticiaSeleccionada)

    return (
        <Container>
            <Row>
                <Col lg={12} className='mt-5'>
                    <Titulo noticiaSeleccionada={noticiaSeleccionada}/>
                    
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <Subtitulo noticiaSeleccionada={noticiaSeleccionada}/>
                    <Foto noticiaSeleccionada={noticiaSeleccionada}/>
                    <Cuerpo noticiaSeleccionada={noticiaSeleccionada}/>
                </Col>
                <Col lg={4}>
                    <section className='row mt-5'>
                        <h6 className='text-center'>ESPACIO PUBLICITARIO</h6>
                        <div className='border border-danger col-lg-6'>publicidad 1</div>
                        <div className='border border-warning col-lg-6'>Publicidad 2</div>
                        <div className='border border- col-lg-6'>Publicidad 3
                        </div>
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