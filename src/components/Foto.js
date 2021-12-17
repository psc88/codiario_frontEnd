import React from 'react';
import muestra from '../img/imgPrueba.png'


const Foto = (props) => {
    return (
        <div>
           <img src={props.noticiaSeleccionada.linkImagen} alt="" /> 
        </div>
    );
};

export default Foto;