import React from 'react';
import { Card, ListGroup, Button, Col } from "react-bootstrap";
import bolsonaro from '../img/bolsonaro.jpg'

const ItemNoticias = (props) => {
    return (
        <Col md={4} sm={12}>
            <Card className='mt-2'>
                <Card.Img variant="top" src={bolsonaro} />
                <Card.Body>
                    <Card.Title>{props.noticias.titulo}</Card.Title>
                    <Card.Text>
                        {props.noticias.noticia}
                    </Card.Text>
                    <Button variant="primary">Leer Mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemNoticias;