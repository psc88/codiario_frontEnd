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

const validarTituloNoticia = (dato) => {
  if (dato.trim().length > 0 && dato.trim().length <= 150) {

    return true;
  } else {

    return false;
  }
};

const validarURL = (url) => {

  let expReg = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (expReg.test(url.trim())) {

    return true;

  } else {

    return false;
  }

}

export { error, acierto, validarNombre, validarNumero, validarTituloNoticia, validarURL, validarComentario, validarMail }