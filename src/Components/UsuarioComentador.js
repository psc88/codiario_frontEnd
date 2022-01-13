import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const UsuarioComentador = () => {
    const [nombreComentador, setNombreComentador] = useState("");
    const [comentario, setComentario] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        console.log(nombreComentador);
        console.log(comentario);
        setError(false);
    }

    return (
        <Container>
            <h1 className="display-3 text-center my-4">Comentarios</h1>
            <hr />
            <Form className="my-5" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                    <Form.Group
                        className="mb-3 w-50"
                        onChange={(e) => setNombreComentador(e.target.value)}
                    >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                    <Form.Group
                        className="mb-3 w-50"
                        onChange={(e) => setComentario(e.target.value)}
                    >
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Max. 400 caracteres"
                            style={{ height: "100px" }}
                        />
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary fs-5" type="submit">
                        Guardar
                    </Button>
                </div>
                {error === true ? (
                    <Alert variant="danger" className="mb-5">
                        Debe completar todos los campos para cargar una noticia!
                    </Alert>
                ) : null}
            </Form>
        </Container>
    );
};

export default UsuarioComentador;