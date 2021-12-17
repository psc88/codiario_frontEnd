import Swal from "sweetalert2";

const validarNombre = (dato) => {
  if (dato.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

const validarMail = (dato) => {
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(dato)) {
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

export {validarMail, validarComentario, error, acierto, validarNombre, validarNumero };

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

export {validarCampoRequerido, validarEmail, validarContraseña};
