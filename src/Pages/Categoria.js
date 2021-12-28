import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemCategoria from "../PaginaUsuarios/ItemCategoria";

const Categoria = (props) => {

    const [noticiaFiltradaCategoria, setNoticiaFiltradaCategoria] = useState([]);
    const [tituloFiltradoCategoria, setTituloFiltradoCategoria] = useState("");

    useEffect(() => {
      consultarAPI();
      },[]);
    
    const consultarAPI = () => {
            setNoticiaFiltradaCategoria(props.noticiaFiltrada);
            setTituloFiltradoCategoria(props.tituloFiltrado);
    };

  return (
    <Container>
      <section className="text-center mb-5">
        <h1 className="display-1 my-5">{tituloFiltradoCategoria}</h1>
      </section>
      <section className="row">
        {noticiaFiltradaCategoria.map((noticia) => (
          <ItemCategoria
            key={noticia.id}
            noticia={noticia}
          ></ItemCategoria>
        ))}
      </section>
    </Container>
  );
};

export default Categoria;
