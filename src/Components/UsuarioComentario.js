import React from 'react';
import { Button, ListGroup } from "react-bootstrap";
import Swal from 'sweetalert2';



const UsuarioComentario = (props) => {
    const eliminarComentario = () => {
        Swal.fire({
            title: "Estas seguro de eliminar el comentario?",
            text: "No se puede recuperar el comentario",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const URL = process.env.REACT_APP_API_URL + "/comentarios/" + props.itemComentario.id
                const respuesta = await fetch(URL, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "apllication/json",
                  },
                });
                if (respuesta.status === 200) {
                  Swal.fire(
                    "Comentario eliminado",
                    "Su comentario fue eliminado correctamente",
                    "success"
                  );
                  props.consultarApi();
                }
              } catch (error) {}
            }
          });
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <p>
                {props.itemComentario.id}-
                <span className="fw-bolder">{props.itemComentario.nombre}:</span>
                <br />
                {props.itemComentario.comentario}
            </p>
            <div>
                <Button onClick={() => eliminarComentario()}>X</Button>
            </div>
        </ListGroup.Item>
    );
};

export default UsuarioComentario;