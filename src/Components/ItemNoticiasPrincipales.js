import React from 'react';
import { Col, Image } from 'react-bootstrap';

const ItemNoticiasPrincipales = (props) => {
    return (
        <>
            <Col md={6} sm={12}>
                <h1>{props.noticias.titulo}</h1>
                <p>{props.noticias.descripcion}</p>
                <Image src={props.noticias.linkImagen} fluid ></Image>
                <hr className='mt-1' />
            </Col>
        </>
    );
};

export default ItemNoticiasPrincipales;