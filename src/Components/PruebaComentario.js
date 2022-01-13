import React from 'react';
import { Button } from "react-bootstrap";


const PruebaComentario = (props) => {
    return (
        <div>
            <p>
                {props.comentario.id}-
                <span className="fw-bolder">{props.comentario.nombre}:</span>
                <br />
                {props.comentario.comentario}
            </p>
            <div>
                <Button>
                    x
                </Button>
            </div>
        </div>
    );
};

export default PruebaComentario;