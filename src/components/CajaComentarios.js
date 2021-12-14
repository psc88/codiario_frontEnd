import React from "react";
import { Container, ListGroup} from "react-bootstrap";
import Comentario from "./Comentario";


const CajaComentarios = (props) => {
  return (
    <Container className="my-5">
      <ListGroup>
        {
          props.comentarios.map((comentario)=> <Comentario key={comentario.id} comentario={comentario} consultarAPI={props.consultarAPI}></Comentario>)
        }
      </ListGroup>
    </Container>
  );
};

export default CajaComentarios;
