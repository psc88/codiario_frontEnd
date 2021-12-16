import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardNoticias = (props) => {
    const borrarNoticia = ()=>{
        
        Swal.fire({
            title: 'Estas seguro de borrar esta noticia?',
            text: "Una vez eliminada la noticia no se podra volver a recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
          }).then(async(result) => {
            if (result.isConfirmed) {

                try{
                    const URL = process.env.REACT_APP_API_URL+'/'+props.noticia.id;
                    const respuesta = await fetch(URL, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    
                    if(respuesta.status === 200){
                        
                        Swal.fire(
                            'Producto eliminado!',
                            'El producto fue correctamente eliminado',
                            'success'
                          );

                          props.consultarAPI();
                    };
                }catch(error){
                    console.log(error)
                }
            }
          })
    }
    return (
        <Col lg={3} md={4} sm={12} className='my-2'>
        <Card>
            <Card.Img variant="top" src= {props.noticia.urlNoticia} />
            <Card.Body>
                <Card.Title>{props.noticia.tituloNoticia}</Card.Title>
                <Card.Text>Categoria: {props.noticia.categoria}</Card.Text>
                <Card.Text>
                    {props.noticia.descripcionNoticia}
                </Card.Text>
                {/* <Link to={`/adminNoticias/editar/${props.notica.id}`} className='btn btn-warning me-2'>Editar</Link> */}
                <Button variant="danger" onClick={()=> borrarNoticia()}>Borrar</Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default CardNoticias;