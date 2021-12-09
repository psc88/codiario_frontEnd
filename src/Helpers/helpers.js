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

export { error, acierto, validarNombre, validarNumero };
