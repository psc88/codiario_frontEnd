import React from 'react';
import { Card, Button, Col } from "react-bootstrap";

const ItemNoticias = (props) => {
    return (
        <Col md={4} sm={12}>
            <Card className='mt-2'>
                <Card.Img variant="top" src={props.noticias.linkImagen} />
                <Card.Body>
                    <Card.Title>{props.noticias.titulo}</Card.Title>
                    <Card.Text>
                        {props.noticias.descripcion}
                    </Card.Text>
                    <Button variant="primary">Leer Mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemNoticias;