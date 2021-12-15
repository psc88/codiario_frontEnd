import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Comentario = (props) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "Estas seguro de eliminar el mensaje?",
      text: "No se puede recuperar el mensaje",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + props.comentario.id;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "apllication/json",
            },
          });
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Comentario eliminado",
              "Su mensaje fue eliminado correctamente",
              "success"
            );
            props.consultarAPI();
          }
        } catch (error) {}
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.comentario.id}-
        <span className="fw-bolder">{props.comentario.nombre}:</span>
        <br />
        {props.comentario.comentario}
      </p>
      <div>
        <Button onClick={() => eliminarProducto()}>
          x
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default Comentario;
