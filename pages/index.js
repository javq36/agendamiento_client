import * as React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// Slider o carrousel responsive
import { Slider } from '../components/Slider';
// navbar
import { Navbar } from '../components/Navbar';
// footer
import { Footer } from '../components/Footer';
// formulario
import { TextFieldInput } from '../components/shared/TextInput';
import { SelectFieldInputOnChange } from '../components/shared/SelectInput/';
// controladores y validaciones del formulario
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
// animaciones
import { motion } from "framer-motion"
import Button from '@mui/material/Button'
import { usStates } from "../constants/usStates";



// validamos que la entrada solo sea de digitos
const digitsOnly = (value) => /^\d+$/.test(value)

const formularioSchema = yup
  .object({
    placa: yup
      .string()
      .required("Por favor ingrese el Numero de la Placa")
      .min(6, "Ingrese maximo 6 digitos para placa Colombiana y 7 para placa Venezolana")
      .max(7, "Ingrese maximo 6 digitos para placa Colombiana y 7 para placa Venezolana"),
    ncedula: yup
      .string()
      .required("Por favor ingrese el Numero de la Cedula")
      .test('Digits only', 'Porfavor solo ingrese Digitos', digitsOnly)
      .max(10, "Ingrese maximo 10 digitos"),
    nombreyapellido: yup
      .string()
      .required("Por favor ingrese Nombre y Apellido")
      .matches(/^[aA-zZ\s]+$/, "Porfavor ingrese solo Letras"),
    celular: yup
      .string()
      .test('Digits only', 'Porfavor solo ingrese Digitos', digitsOnly)
      .required("Por favor ingrese el Numero Telefonico")
      .matches(/^\w{8}/, "Porfavor Ingrese mas de 8 Digitos"),
    marca: yup
      .string()
      .required("Por favor ingrese la Marca del Vehiculo"),
    modelov: yup
      .string()
      .required("Por favor ingrese el Tipo del Modelo"),
    tipodeservicio: yup //select
      .string()
      .required("Por favor ingrese el Tipo del Servicio"),
    tipoajuste: yup //select
      .string()
      .required("Por favor ingrese el Tipo de Ajustes"),
    nota: yup
      .string()
      .required("Por favor ingrese la Nota"),
    sucursal: yup //select
      .string()
      .required("Por favor ingrese la Sucursal"),
    pruebaw: yup //select
      .string()
      .required("Por favor ingrese la Sucursal"),
  })
  .required();

function index() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formularioSchema),
  });

  const [age, setAge] = React.useState('');
  const [oculto, setOculto] = React.useState('none');
  const [displayboton, setDisplayboton] = React.useState('true');

  const [isView, setIsView] = React.useState('hidden');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // al momento de precionar el boton hace esto
  const formSubmitHandler = async (data) => {
    if (Object.keys(errors).length === 0) {
      data.pruebaw = age ?? 'no llego';
      console.log(data);
    }
  };
  const formSearchHandler = async (data) => {
    setOculto('block');
    setDisplayboton('none')
    setIsView('show');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  const itemanimado = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, x: [5000, 0], transition: { type: "spring", stiffness: 100, duration: 1 } }
  }
  const itemanimado2 = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, x: [-5000, 0], transition: { type: "spring", stiffness: 100, duration: 1 } }
  }


  return (
    <div>
      <Navbar />
      <Container maxWidth="md" style={{ marginBottom: 10 }}>
        <motion.div
          animate={{ x: [-4000, 0], opacity: 2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)" }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}>
          <Paper elevation={4} style={{ marginTop: 15, backgroundColor: 'black' }}>
            <Slider />
          </Paper>
        </motion.div>
      </Container>

      <Container maxWidth="sm" sx={{ marginBottom: 20, overflow: 'hidden' }}>
        <motion.div
          animate={{ y: [4000, 0], opacity: 2 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}>
          <motion.div layout
            transition={{
              layout: { duration: 0.4 }
            }}>
            <Paper elevation={4} style={{ overflow: 'hidden', marginTop: 15, marginBottom: 20, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)" }}>
              <h3 style={{ textAlign: 'center', paddingTop: '10px', marginBottom: '8px' }}>Agenda tu Cita</h3>
              <TextFieldInput name={'placa'} control={control} label={'Numero de Placa'} type={'text'} errors={!!errors.placa}
                helperText={errors.placa ? errors.placa?.message : null}
                defaultValue={""}
                style={{ marginBottom: '0px', paddingBottom: '0px' }} endIcon={<SendIcon />}
              />
              <Container maxWidth="sm" style={{ display: displayboton }}>
                <Button onClick={formSearchHandler} variant="contained" style={{ width: "100%", marginBottom: 12, backgroundColor: '#2f335e' }} endIcon={<SendIcon />} >
                  Buscar
                </Button>
              </Container>

              <motion.ul
                variants={container}
                layout
                animate={isView}
                className={oculto}>
                <motion.li variants={itemanimado}>
                  <TextFieldInput name={'ncedula'} control={control} label={'Numero de Cédula'} type={'text'} errors={!!errors.ncedula}
                    helperText={errors.ncedula ? errors.ncedula?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado2}>
                  <TextFieldInput name={'nombreyapellido'} control={control} label={'Nombre y Apellido'} type={'text'} errors={!!errors.nombreyapellido}
                    helperText={errors.nombreyapellido ? errors.nombreyapellido?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado}>
                  <TextFieldInput name={'celular'} control={control} label={'Celular'} type={'text'} errors={!!errors.celular}
                    helperText={errors.celular ? errors.celular?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado2}>
                  <TextFieldInput name={'marca'} control={control} label={'Marca'} type={'text'} errors={!!errors.marca}
                    helperText={errors.marca ? errors.marca?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado}>
                  <TextFieldInput name={'modelov'} control={control} label={'Modelo del Vehículo'} type={'text'} errors={!!errors.modelov}
                    helperText={errors.modelov ? errors.modelov?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado2}>
                  <TextFieldInput name={'tipodeservicio'} control={control} label={'Tipo de Servicio'} type={'text'} errors={!!errors.tipodeservicio}
                    helperText={errors.tipodeservicio ? errors.tipodeservicio?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado}>
                  <TextFieldInput name={'tipoajuste'} control={control} label={'Tipo de Ajuste'} type={'text'} errors={!!errors.tipoajuste}
                    helperText={errors.tipoajuste ? errors.tipoajuste?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado2}>
                  <TextFieldInput name={'nota'} control={control} label={'Nota'} type={'text'} errors={!!errors.nota}
                    helperText={errors.nota ? errors.nota?.message : null}
                    defaultValue={""} />
                </motion.li>
                <motion.li variants={itemanimado}>
                  <SelectFieldInputOnChange
                    name={"pruebaw"}
                    control={control}
                    onChange={handleChange}
                    label={"Frecuencia de pago"}
                    type={"text"}
                    errors={!!errors.pruebaw}
                    helperText={
                      errors.pruebaw ? errors.pruebaw?.message : null
                    }
                    defaultValue={""}
                    options={usStates}
                    value={age}
                    required
                  /*  disabled={unique}  */
                  />
                </motion.li>
                <motion.li variants={itemanimado2}>
                  <TextFieldInput name={'sucursal'} control={control} label={'Sucursal'} type={'text'} errors={!!errors.sucursal}
                    helperText={errors.sucursal ? errors.sucursal?.message : null}
                    defaultValue={""} />
                </motion.li>

                <Container maxWidth="sm">
                  <Button onClick={handleSubmit(formSubmitHandler)} variant="contained" style={{ width: "100%", marginBottom: 12, backgroundColor: '#2f335e' }} endIcon={<SendIcon />} >
                    Enviar
                  </Button>
                </Container>

              </motion.ul>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>

      <Footer />

    </div >
  )
}

export default index;

