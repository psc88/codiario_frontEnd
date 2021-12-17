import React from 'react';

const Titulo = (props) => {
    return (
        <div className='display-2 fw-bold mb-3'>
            {props.noticiaSeleccionada.titulo}
        </div>
    );
};

export default Titulo;