import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ItemCategoria = (props) => {
    return (
        <Col lg={3} md={4} sm={12} className='my-2'>
        <Card>
        <Card.Title className='text-center my-3'>{props.noticia.titulo}</Card.Title>
            <Card.Img variant="top" src={props.noticia.linkImagen}/>
            <Card.Body>
                <Card.Text>Categoria: {props.noticia.categoria}</Card.Text>
                <Card.Text>
                    {props.noticia.descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ItemCategoria;