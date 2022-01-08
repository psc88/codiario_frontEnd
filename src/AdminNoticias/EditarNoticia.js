import React, { useEffect, useState, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validarNombre, validarDescripcion, validarTituloNoticia, validarURL} from "../Helpers/helpers";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState({});
  const [categoria, setCategoria] = useState("");
  const tituloNoticiaRef = useRef("");
  const descripcionNoticiaRef = useRef("");
  const linkImagenRef = useRef("");
  const [error, setError] = useState(false);
  const navegacion = useNavigate();

  const URL = process.env.REACT_APP_API_URL +'/noticias/'+id;

  useEffect(() => {
    const consultarApiPrueba = async () => {
      try{
      const respuesta = await fetch(URL);
        if (respuesta.status === 200){
          const dato = await respuesta.json();
          setNoticia(dato);
          setCategoria(dato.categoria);
        }
      }catch(error){
        console.log(error);
        Swal.fire("Oops algo salio mal!", "icon: error", "danger");
      }
    }
    consultarApiPrueba();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(validarTituloNoticia(tituloNoticiaRef.current.value) &&
    validarDescripcion(descripcionNoticiaRef.current.value) &&
    validarURL(linkImagenRef.current.value) &&
    validarNombre(categoria)){
        setError(false);

        const noticiaEditada ={
            titulo: tituloNoticiaRef.current.value,
            descripcion: descripcionNoticiaRef.current.value,
            linkImagen: linkImagenRef.current.value,
            categoria: categoria
        }
        
        try{
            const respuesta = await fetch(URL, {
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(noticiaEditada)
            });
            
            if(respuesta.status === 200){
                Swal.fire(
                    'Noticia editada',
                    'La noticia fue correctamente editada y actualizada',
                    'success'
                )
                props.consultarAPI()
                navegacion('/admin');
            }
        }catch(error){
            console.log(error)
        }
    }else{
        setError(true);
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Editar Noticia</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titulo*</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            maxLength={150}
            placeholder="El dolar se volvio a disparar"
            defaultValue={noticia.titulo}
            ref={tituloNoticiaRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            as='textarea'
            type="text"
            minLength={20}
            maxLength={3000}
            placeholder="Una vez mas, el dolar volvio a superar la barrera de los..."
            defaultValue={noticia.descripcion}
            ref={descripcionNoticiaRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Url que contiene la imagen de la noticia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://image.shutterstock.com/z/stock-photo-one-hundred-dollars-dinero-money-dolars-cash-flow-1446368390.jpg"
            defaultValue={noticia.linkImagen}
            ref={linkImagenRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="Actualidad">Actualidad</option>
            <option value="Espectaculo">Espectáculos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Deporte">Deportes</option>
            <option value="Politica">Política</option>
            <option value="Economia">Economía</option>
            <option value="Salud">Salud</option>
            <option value="Fotografia">Fotografía</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar cambios
        </Button>
      </Form>
      {error === true ? (<Alert variant='danger' className='mb-5'>
                Debe completar todos los campos para concretar la edición de la noticia!
            </Alert>): null}
    </Container>
  );
};

export default EditarNoticia;
