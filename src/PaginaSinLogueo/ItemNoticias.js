import React from 'react';
import { Button, Card,Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ItemNoticias = (props) => {
    const navegar = useNavigate();

    const mensajeLogueo = () => {
        Swal.fire({
            title: 'Necesita estar logueado',
            text: "¿Quieres ingresar?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ingresar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                navegar("/login")
            }
          })
    }

    return (
        <Col md={4} sm={12}>
            <Card className='mt-2'>
                <Card.Img variant="top" src={props.noticias.linkImagen} />
                <Card.Body>
                    <Card.Title>{props.noticias.titulo}</Card.Title>
                    <Card.Text>
                        {props.noticias.descripcion}
                    </Card.Text>
                    <Button className='btn btn-primary'onClick={mensajeLogueo}>Leer Mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemNoticias;