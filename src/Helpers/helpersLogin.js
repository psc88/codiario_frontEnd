import Swal from "sweetalert2";

const validarNombre = (dato) => {
  if (dato.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};


const validarComentario = (dato) => {
  if (dato.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

const validarNumero = (dato) => {
  if (dato > 0 && dato <= 50000000000000000) return true;
  else return false;
};

const acierto = () => {
  return Swal.fire("Bien Hecho !", "Enviaste tu consulta <hr> Te estaremos respondiendo a la brevedad", "success");
};

const error = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Algo Fallo",
    footer: '<a href="">Revisa los datos</a>',
  });
};

// Funcion para validar campos
const validarCampoRequerido= (dato) =>{
  if(dato.trim().length >0){
      return true
  }else
  {return false}
}

function validarEmail (dato){
  // expresion regular
  let Email = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  if(Email.test(dato)){
    return true;
  } else {
    
    return false;
  }
}; 

function validarContraseña(dato){
    // expresion regular
  let Contraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  // Entre 8 y 16 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales
 
  if(dato.trim() != ''){
   
    return true;
  } else {
   
    return false;
  }
};

export default {validarCampoRequerido, validarComentario, validarContraseña, validarEmail, validarNombre, validarNumero, acierto, error }