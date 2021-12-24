import React from 'react';

const Foto = (props) => {
    return (
        <div>
           <img src={props.noticiaSeleccionada.linkImagen} alt="" /> 
        </div>
    );
};

export default Foto;