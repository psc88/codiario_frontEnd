import React from 'react';
import { Card,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'

const ItemNoticias = (props) => {
    return (
        <Col md={4} sm={12}>
            <Card className='mt-2'>
                <Card.Img variant="top" src={props.noticias.linkImagen} />
                <Card.Body>
                    <Card.Title>{props.noticias.titulo}</Card.Title>
                    <Card.Text id='recorteTexto'>
                        {props.noticias.descripcion}
                    </Card.Text>
                    <Link to={`/nota/${props.noticias.id}`} className='btn btn-primary'>Leer mas</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemNoticias;