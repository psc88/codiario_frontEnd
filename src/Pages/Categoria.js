import React from 'react';
import { Container } from 'react-bootstrap';
import CardNoticias from '../AdminNoticias/CardNoticias';

const Categoria = (props) => {

    const noticiasActualidad = props.noticias.filter(noticias => noticias.categoria === 'Actualidad');
    const noticiasEspectaculos = props.noticias.filter(noticias => noticias.categoria === 'Espectaculos');
    const noticiasTecnologia = props.noticias.filter(noticias => noticias.categoria === 'Tecnologia');
    const noticiasDeportes = props.noticias.filter(noticias => noticias.categoria === 'Deportes');
    const noticiasPolitica = props.noticias.filter(noticias => noticias.categoria === 'Politica');
    const noticiasEconomia = props.noticias.filter(noticias => noticias.categoria === 'Economia');
    const noticiasSalud = props.noticias.filter(noticias => noticias.categoria === 'Salud');
    const noticiasFotografia = props.noticias.filter(noticias => noticias.categoria === 'Fotografia');
     
    if(noticiasActualidad === props.noticias.categoria){
        for(let tituloActualidad = 0; tituloActualidad <=7; tituloActualidad++){
            console.log(tituloActualidad)
        }
    }else{}
    return (
        <Container>
            <section className='text-center mb-5'>
                <h1 className='display-1 my-5'>{props.categorias}</h1>
            </section>
            <section className='row'>
                {
                 props.noticias.map((categoria) => <CardNoticias key={categoria.categoria} noticia={categoria} consultarAPI={props.consultarAPI} ></CardNoticias>)
                }
            </section>
        </Container>
    );
};

export default Categoria;