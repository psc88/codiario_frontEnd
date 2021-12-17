import React from 'react';

const Cuerpo = (props) => {
    return (
        <div className='text-justify my-4'>
            {props.noticiaSeleccionada.descripcion}
        </div>
    );
};

export default Cuerpo;