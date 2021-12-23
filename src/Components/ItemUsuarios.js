
import React from 'react';
import  {ListGroup, NavDropdown} from 'react-bootstrap';


const ItemUsuarios= (props) =>{
    return(
        <ListGroup.Item className='d-flex justify-content-between'>
            <p>
                {props.usuario.NombreYApellido}
                <span className="fw-bolder">- Email: {props.usuario.Email}</span>
                <div>
                <NavDropdown title="Categoria / Rol" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Editor</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Jefe de Sección</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Redactor</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Fotografo</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.5">Lector-usuario</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.6">Desarrollador Full Stack</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.7">Administrador de Usuarios</NavDropdown.Item>
                 </NavDropdown>
                </div>
            </p>
        </ListGroup.Item>

    )
}

export  default ItemUsuarios;