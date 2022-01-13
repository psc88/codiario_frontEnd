import React from 'react';
import { Button, ListGroup } from "react-bootstrap";

 const eliminarProducto = () => {
     console.log("desde elimnarProducto")
 }

const UsuarioComentario = (props) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <p>
                {props.itemComentario.id}-
                <span className="fw-bolder">{props.itemComentario.nombre}:</span>
                <br />
                {props.itemComentario.comentario}
            </p>
            <div>
                <Button onClick={() => eliminarProducto()}>x</Button>
            </div>
        </ListGroup.Item>
    );
};

export default UsuarioComentario;