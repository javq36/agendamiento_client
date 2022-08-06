const Swal = require("sweetalert2");

export const AlertError = (alertmensagge) => {
  Swal.fire({
    title: "¡Error!",
    text: alertmensagge,
    icon: "error",
    confirmButtonColor: "#2f335e",
    confirmButtonText: "Ok",
  });
};

export const AlertSuccess = (alertmensagge) => {
  Swal.fire({
    title: "¡Perfecto!",
    text: alertmensagge,
    icon: "success",
    confirmButtonColor: "#2f335e",
    confirmButtonText: "Ok",
  });
};
export const AlertInfo = (alertmensagge) => {
  Swal.fire({
    title: "Recuerda..",
    text: alertmensagge,
    icon: "info",
    confirmButtonColor: "#2f335e",
    confirmButtonText: "Ok",
  });
};
export const AlertQuestion = (alertmensagge) => {
  Swal.fire({
    title: "¡Espera!",
    text: alertmensagge,
    showDenyButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `No guardar`,
    icon: "question",
    confirmButtonColor: "#2f335e",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      AlertSuccess("Los cambios se guardaron con Exito!");
    } else if (result.isDenied) {
      AlertInfo("No se guardo ningun cambio, Por favor seleccione otra casilla");
    }
  });
};
