import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";
import Router from "next/router";

// alert
import { AlertError, AlertSuccess } from "../helpers/AlertFunctions";
// Slider o carrousel responsive
import { Slider } from "../components/Slider";
// navbar
import { Navbar } from "../components/Navbar";
// footer
import { Footer } from "../components/Footer";
// formulario
import { TextFieldInput } from "../components/shared/TextInput";
import { SelectFieldInputOnChange } from "../components/shared/SelectInput";
// Slider o carrousel responsive
import Calendar from "../components/Calendar/Calendar";

// controladores y validaciones del formulario
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formularioSchema } from "../helpers/YupValidations";
// animaciones
import { motion } from "framer-motion";
import {
  container,
  itemanimado,
  itemanimado2,
} from "../helpers/AnimationsProps";
// listas de opciones para los selects
import {
  listsucursal,
  listtiposervicio,
  listtipoajuste,
} from "../constants/usStates";
// localstorage
import { useLocalStorage } from "../constants/useLocalStorage";
import { useValidateSelect } from "../hooks/useValidateSelect";

function index() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formularioSchema),
  });
  const {
    error: error1,
    errormessage: error1message,
    validateSelector,
  } = useValidateSelect();
  const {
    error: error2,
    errormessage: errormessage2,
    validateSelector: validateSelector2,
  } = useValidateSelect();
  const {
    error: error3,
    errormessage: errormessage3,
    validateSelector: validateSelector3,
  } = useValidateSelect();

  const [usuario, setusuario] = useLocalStorage("usuario", "");
  const [tiposervicio, setTiposervicio] = React.useState("");
  const [tipoajuste, setTipoajuste] = React.useState("");
  const [tiposucursal, setTipsucursal] = React.useState("");
  const [oculto, setOculto] = React.useState("none");
  const [displayboton, setDisplayboton] = React.useState("true");
  const [isView, setIsView] = React.useState("hidden");
  // mensaje base de los alerts de sweety alert
  const alertmensagge = "";

  const Validations = () => {
    validateSelector("Por favor ingrese el Tipo del Servicio", tiposervicio);
    validateSelector2("Por favor ingrese el Tipo de Ajuste", tipoajuste);
    validateSelector3("Por favor ingrese La Sucursal", tiposucursal);
  };

  // al momento de precionar el boton hace esto
  const formSubmitHandler = async (data) => {
    if (Object.keys(errors).length === 0) {
      data.tipodeservicio = tiposervicio ?? "no llego";
      data.tipodeajuste = tipoajuste ?? "no llego";
      data.sucursal = tiposucursal ?? "no llego";
      if (tiposervicio === "" || tipoajuste === "" || tiposucursal === "") {
        console.log(tiposervicio);
        console.log(tipoajuste);
        console.log(tiposucursal);
      } else {
        setusuario(data);
        alertmensagge = "¡Enviado con Exito!";
        AlertSuccess(alertmensagge);
        Router.push("/calendario");
      }
    }
  };

  // este es el search, la funcion corre despues de darle al boton buscar
  const formSearchHandler = async (data) => {
    var bplaca = document.getElementById("placa").value;
    // validamos el tamaño
    if (bplaca.length > 5 && bplaca.length < 8) {
      // validamos la respuesta
      if (bplaca === "prueba") {
        setOculto("block");
        setDisplayboton("none");
        setIsView("show");
      } else {
        alertmensagge = "Por favor ingrese un numero valido de placa";
        AlertError(alertmensagge);
      }
    } else {
      alertmensagge =
        "Por favor ingrese 6 digitos para placa colombiana y 7 para placa venezolana";
      AlertError(alertmensagge);
    }
  };

  // estos son lso handlechanges para los selects, actualizn la casilla con el valor
  const handleChange = (event) => {
    setTiposervicio(event.target.value);
  };
  const handleChange2 = (event) => {
    setTipoajuste(event.target.value);
  };
  const handleChange3 = (event) => {
    setTipsucursal(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ minHeight: "100vh" }}>
        <Container maxWidth="md" style={{ marginBottom: 10 }}>
          <motion.div
            animate={{
              x: [-4000, 0],
              opacity: 2,
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 100, duration: 4 }}
          >
            <Paper
              elevation={4}
              style={{ marginTop: 15, backgroundColor: "black" }}
            >
              <Slider />
            </Paper>
          </motion.div>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: [4000, 0], opacity: 2 }}
            transition={{ type: "spring", stiffness: 100, duration: 4 }}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                layout: { duration: 0.5 },
                default: { ease: "linear" },
              }}
            >
              <Paper
                elevation={4}
                style={{
                  overflow: "hidden",
                  marginTop: 15,
                  marginBottom: 20,
                  boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    marginBottom: "8px",
                  }}
                >
                  Agenda tu Cita
                </h3>

                <TextFieldInput
                  id="placa"
                  name={"placa"}
                  control={control}
                  label={"Numero de Placa"}
                  type={"text"}
                  errors={!!errors.placa}
                  helperText={errors.placa ? errors.placa?.message : null}
                  defaultValue={""}
                  style={{ marginBottom: "0px", paddingBottom: "0px" }}
                  endIcon={<SendIcon />}
                />

                <Container maxWidth="sm" style={{ display: displayboton }}>
                  <Button
                    onClick={formSearchHandler}
                    variant="contained"
                    style={{
                      width: "100%",
                      marginBottom: 12,
                      backgroundColor: "#2f335e",
                    }}
                    endIcon={<SendIcon />}
                  >
                    Buscar
                  </Button>
                </Container>

                <motion.ul
                  variants={container}
                  layout
                  animate={isView}
                  className={oculto}
                >
                  <motion.li variants={itemanimado}>
                    <TextFieldInput
                      name={"ncedula"}
                      control={control}
                      label={"Numero de Cédula"}
                      type={"text"}
                      errors={!!errors.ncedula}
                      helperText={
                        errors.ncedula ? errors.ncedula?.message : null
                      }
                      defaultValue={""}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado2}>
                    <TextFieldInput
                      name={"nombreyapellido"}
                      control={control}
                      label={"Nombre y Apellido"}
                      type={"text"}
                      errors={!!errors.nombreyapellido}
                      helperText={
                        errors.nombreyapellido
                          ? errors.nombreyapellido?.message
                          : null
                      }
                      defaultValue={""}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado}>
                    <TextFieldInput
                      name={"celular"}
                      control={control}
                      label={"Celular"}
                      type={"text"}
                      errors={!!errors.celular}
                      helperText={
                        errors.celular ? errors.celular?.message : null
                      }
                      defaultValue={""}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado2}>
                    <TextFieldInput
                      name={"marca"}
                      control={control}
                      label={"Marca"}
                      type={"text"}
                      errors={!!errors.marca}
                      helperText={errors.marca ? errors.marca?.message : null}
                      defaultValue={""}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado}>
                    <TextFieldInput
                      name={"modelov"}
                      control={control}
                      label={"Modelo del Vehículo"}
                      type={"text"}
                      errors={!!errors.modelov}
                      helperText={
                        errors.modelov ? errors.modelov?.message : null
                      }
                      defaultValue={""}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado2} onBlur={validateSelector}>
                    <SelectFieldInputOnChange
                      name={"tipodeservicio"}
                      control={control}
                      label={"Tipo de Servicio"}
                      type={"select"}
                      errors={!!error1}
                      helperText={error1message}
                      defaultValue={""}
                      options={listtiposervicio}
                      onChange={handleChange}
                      value={tiposervicio}
                    ></SelectFieldInputOnChange>
                  </motion.li>
                  <motion.li variants={itemanimado} onBlur={validateSelector2}>
                    <SelectFieldInputOnChange
                      id="tipoajuste"
                      name={"tipodeajuste"}
                      control={control}
                      label={"Tipo de Ajuste"}
                      type={"select"}
                      errors={!!error2}
                      helperText={errormessage2}
                      defaultValue={""}
                      options={listtipoajuste}
                      onChange={handleChange2}
                      value={tipoajuste}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado2} onBlur={validateSelector3}>
                    <SelectFieldInputOnChange
                      name={"sucursal"}
                      control={control}
                      label={"Sucursal"}
                      type={"select"}
                      errors={!!error3}
                      helperText={errormessage3}
                      defaultValue={""}
                      options={listsucursal}
                      onChange={handleChange3}
                      value={tiposucursal}
                    />
                  </motion.li>
                  <motion.li variants={itemanimado}>
                    <Container maxWidth="sm">
                      <Button
                        onClick={handleSubmit(formSubmitHandler)}
                        onFocus={Validations}
                        variant="contained"
                        style={{
                          width: "100%",
                          marginBottom: 12,
                          backgroundColor: "#2f335e",
                        }}
                        endIcon={<SendIcon />}
                      >
                        Enviar
                      </Button>
                    </Container>
                  </motion.li>
                </motion.ul>
              </Paper>
            </motion.div>
          </motion.div>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default index;
