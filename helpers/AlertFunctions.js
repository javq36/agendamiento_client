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