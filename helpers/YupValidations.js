import * as yup from "yup";
// validamos que la entrada solo sea de digitos
const digitsOnly = (value) => /^\d+$/.test(value);

export const formularioSchema = yup
.object({
  placa: yup
    .string()
    .required("Por favor ingrese el Numero de la Placa")
    .min(
      6,
      "Ingrese maximo 6 digitos para placa Colombiana y 7 para placa Venezolana"
    )
    .max(
      7,
      "Ingrese maximo 6 digitos para placa Colombiana y 7 para placa Venezolana"
    ),
  ncedula: yup
    .string()
    .required("Por favor ingrese el Numero de la Cedula")
    .test("Digits only", "Porfavor solo ingrese Digitos", digitsOnly)
    .max(10, "Ingrese maximo 10 digitos")
    .matches(/^\w{9}/, "Porfavor Ingrese mas Digitos"),
  nombreyapellido: yup
    .string()
    .required("Por favor ingrese Nombre y Apellido")
    .matches(/^[aA-zZ\s]+$/, "Porfavor ingrese solo Letras"),
  celular: yup
    .string()
    .test("Digits only", "Porfavor solo ingrese Digitos", digitsOnly)
    .required("Por favor ingrese el Numero Telefonico")
    .matches(/^\w{8}/, "Porfavor Ingrese mas de 8 Digitos"),
  marca: yup.string().required("Por favor ingrese la Marca del Vehiculo"),
  modelov: yup.string().required("Por favor ingrese el Tipo del Modelo"),
})
.required();