import React, {useEffect, useState, useRef} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validarNombre, validarTituloNoticia, validarURL } from '../Helpers/helpers';

const EditarNoticia = () => {
    const { id } = useParams()
    //console.log(id)
    const [noticia, setNoticia] = useState({});
    const [categoria, setCategoria] = useState('');
    //crear variables de referencias
    const nombreProductoRef = useRef('');
    const precioProductoRef = useRef(0);

    const URL = process.env.REACT_APP_API_URL + '/' + id;

    return (
        <Container>
            <h1 className="display-3 text-center my-4">Editar Noticia</h1>
            <hr />
            <Form className="my-5">
                <Form.Group className="mb-3">
                    <Form.Label>Titulo*</Form.Label>
                    <Form.Control type="text" placeholder="El dolar se volvio a disparar"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion*</Form.Label>
                    <Form.Control type="text" placeholder="Una vez mas, el dolar volvio a superar la barrera de los..."/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Url que contiene la imagen de la noticia*</Form.Label>
                    <Form.Control type="text" placeholder="https://image.shutterstock.com/z/stock-photo-one-hundred-dollars-dinero-money-dolars-cash-flow-1446368390.jpg"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select>
                        <option value=''>Seleccione una opcion</option>
                        <option value='actualidad'>Actualidad</option>
                        <option value='espectaculos'>Espectáculos</option>
                        <option value='tecnologia'>Tecnología</option>
                        <option value='deportes'>Deportes</option>
                        <option value='politica'>Política</option>
                        <option value='economia'>Economía</option>
                        <option value='salud'>Salud</option>
                        <option value='fotografia'>Fotografía</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Guardar cambios
                </Button>
            </Form>
        </Container>
    );
};

export default EditarNoticia;