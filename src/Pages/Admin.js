import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardNoticias from '../AdminNoticias/CardNoticias';



const Admin = (props) => {

    return (
        <Container>
            <section className='text-center mb-5'>
                <h1 className='display-1 my-5'>Bienvenido Administrador</h1>
                <p className='lead'>Te damos la bienvenida a la pagina Admin de noticias. Aqui podras dar de altas noticias, editarlas o borrarlas. En la misma encontraras las cards con las noticias y los diferentes botones para realizar cada accion ya mencionada. Esperamos que su experiencia como usuario admin sea la mejor.</p>
            </section>
            <hr className='my4' />
            <section>
                <h2 className='display-3 text-center'>Noticias</h2>
                <article className="d-flex align-items-center mb-4 justify-content-end">
                    <p className="my-0 me-4 fw-bold">Agregue una nueva noticia:</p>
                    <Link to='/admin/nuevaNoticia' className='btn btn-primary'>Agregar</Link>
                </article>
                <article className='row'>
                        {
                            props.noticias.map((noticia)=> <CardNoticias key={noticia.id} noticia={noticia} consultarAPI={props.consultarAPI} ></CardNoticias>)
                        }
                </article>
            </section>
        </Container>
    );
};

export default Admin;