import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemNoticias from './ItemNoticias';

const Noticias = (props) => {
    return (
        <Container className='my-5'>
            <h1 className="text-center mb-5">Actualidad</h1>
            <article>
                <Row>
                        {
                            props.noticias.map((noticias) => 
                            <ItemNoticias key={noticias.id} noticias={noticias}></ItemNoticias>)
                        }
                </Row>
            </article>
        </Container>
    );
};

export default Noticias;