import React from 'react';
import  {ListGroup} from 'react-bootstrap';


const ItemUsuarios= (props) =>{
    return(
        <ListGroup.Item className='d-flex justify-content-between'>
            <p>
                {props.usuario.NombreYApellido}
                <span className="fw-bolder">- Email: {props.usuario.email}</span>
                <div className='d-flex mt-3'>
                    <p className='me-2'>Nombre y Apellido:</p>
                    <p>{props.usuario.nombreYApellido}</p>
                </div>
            </p>
        </ListGroup.Item>
    )
}

export default ItemUsuarios;