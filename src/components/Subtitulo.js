import React from 'react';

const Subtitulo = (props) => {
    return (
        <div className='display-6 mb-5'>
           {props.noticiaSeleccionada.descripcion}
        </div>
    );
};

export default Subtitulo;