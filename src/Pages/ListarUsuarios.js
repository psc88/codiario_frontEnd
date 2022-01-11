import React from "react";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import ItemUsuarios from '../Components/ItemUsuario';
import { ListGroup } from "react-bootstrap";

const ListaUsuarios = (props) => {
    return (
      <Container className="my-5">
        <h1 className="text-center mb-5">Lista de Usuarios</h1>
        <hr />
        <article className="d-flex align-items-center mb-4 justify-content-end">
          <p className="my-0 me-4 fw-bold">Administracion de Usuarios </p>
          <Link to='/usuarios' className='btn btn-danger'>Administrar</Link>
        </article>
        <ListGroup>
            {
                props.usuarios.map((usuario)=><ItemUsuarios key={usuario.id} usuario={usuario}></ItemUsuarios>)
            }
        </ListGroup>
      </Container>
    );
  };
  
  export default ListaUsuarios;