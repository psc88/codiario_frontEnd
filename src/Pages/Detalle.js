import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
// import Comentador from '../Components/Comentador';
// import CajaComentarios from '../Components/CajaComentarios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Publicidad from '../Components/Publicidad';
import publicidadLolla from '../img/Publicidad/publicidadLolla1.gif';

const Detalle = (props) => {
  const { id } = useParams();
  const [comentarios ,setComentarios] = useState([]);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState([]);
  const URL = process.env.REACT_APP_API_URL + "/comentarios"
  const URLn = process.env.REACT_APP_API_URL + "/noticias/" + id
  console.log(id)

  useEffect(() => {
    consultarAPI()
    creador()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(comentarios)

  const creador = async () => {
    try {
      const respuestaN = await fetch(URLn);
      const datosN = await respuestaN.json();
      setNoticiaSeleccionada(datosN)
    } catch (error) {
      console.log(error)
    }
  }

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setComentarios(datos)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(noticiaSeleccionada)

  return (
    <Container>
      <article sm={12} className='mt-5 text-center'>
        <h1 className='display-2 fw-bold mb-3 fst-italic'>
          {noticiaSeleccionada.titulo}
        </h1>
      </article>
      <Row>
        <Col sm={12} md={8}>
          <div className='text-center'>
            <Image src={noticiaSeleccionada.linkImagen} fluid className='my-5'></Image>
          </div>
          <p className='fs-5'>{noticiaSeleccionada.descripcion}</p>
        </Col>
        <Col sm={12} md={4}>
          <section className='row mt-5'>
            <h6 className='text-center'>ESPACIO PUBLICITARIO</h6>
            <Publicidad></Publicidad>
            <Image src={publicidadLolla}></Image>           
          </section>
        </Col>
        <Col sm={12}>
          {/* <Comentador consultarAPI={consultarAPI} />
          <CajaComentarios comentarios={comentarios} consultarAPI={consultarAPI}></CajaComentarios> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;