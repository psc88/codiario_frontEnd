import Swal from "sweetalert2";

const validarNombre = (dato) => {
  if (dato.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

const validarNumero = (dato) => {
  if (dato > 0 && dato <= 5000) return true;
  else return false;
};

const acierto = () => {
  return Swal.fire("Good job!", "You clicked the button!", "success");
};

const error = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};

const validarTituloNoticia = (dato) => {
  if (dato.trim().length > 0 && dato.trim().length <= 150) {

    return true;
  } else {

    return false;
  }
};

const validarURL = (dato) => {

  let expReg = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  console.log(dato);

  if (dato.trim() != '' && expReg.test(dato.trim())) {

    return true;

  } else {

    return false;
  }

}



export { error, acierto, validarNombre, validarNumero, validarTituloNoticia, validarURL };
