import Swal from "sweetalert2";

const validarCampoRequerido = (dato) => {
  if (dato.trim().length > 0 && dato.trim().length < 100) {
    return true
  } else {
    return false
  }
}

const validarNombre = (dato) => {

  if (dato.trim().length > 0 && dato.trim().length <= 50) {
    return true;
  } else {
    return false;
  }
};

const validarComentario = (dato) => {
  console.log(dato.trim().length)
  if (dato.trim().length > 0 && dato.trim().length <= 1000) {
    return true;
  } else {
    return false;
  }
};

const validarNumero = (dato) => {
  let codigoUnico = /^[1-9]{2}$/;
  if (codigoUnico.test(dato.trim())) {
    return true;
  } else {
    return false;
  }
};

const validarNumeroTelefono = (dato) => {
  let codigoUnico = /^[1-9]{10}$/;
  if (codigoUnico.test(dato.trim())) {
    return true;
  } else {
    return false;
  }
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

const validarTituloNoticia = (dato) => {
  if (dato.trim().length > 5 && dato.trim().length <= 150) {
    return true;
  } else {
    return false;
  }
};

const validarDescripcion = (dato) => {
  if (dato.trim().length > 20 && dato.trim().length <= 3000) {
    return true;
  } else {
    return false;
  }
}

const validarURL = (url) => {
  let expReg = /^https?:\/\/[\w\-.]+(\.[\w\-.]+)+[/#?]?.*$/;
  if (expReg.test(url.trim())) {
    return true;
  } else {
    return false;
  }
}

function validarEmail(dato) {
  // minimalista basico 
  let Email = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (Email.test(dato)) {
    return true;
  } else {
    return false;
  }
};

function validarContraseña(dato) {
  let contraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  // Entre 8 y 16 caracteres, por lo menos un digito, una minuscula, una mayusula, y no puede tener simbolos
  if (dato.trim() !== '' && contraseña.test(dato.trim())) {
    return true;
  } else {
    return false;
  }
};

export { error, acierto, validarNombre, validarNumero, validarTituloNoticia, validarDescripcion, validarURL, validarComentario, validarCampoRequerido, validarEmail, validarContraseña, validarNumeroTelefono }