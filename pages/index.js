import * as React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SendIcon from '@mui/icons-material/Send';

// Slider o carrousel responsive
import { Slider } from '../components/Slider';
// navbar
import { Navbar } from '../components/Navbar';

// formulario
import { TextFieldInput } from '../components/shared/TextInput';

import { SelectFieldInputOnChange } from '../components/shared/SelectInput';
// controladores y validaciones del formulario
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// animaciones
import { motion } from "framer-motion"
import Button from '@mui/material/Button'



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
      .matches(/^\w{}/, "Porfavor Ingrese mas de 8 Digitos"),
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
    prueba: yup
      .string()
      .required("www"),
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
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // al momento de precionar el boton hace esto
  const formSubmitHandler = async (data) => {
    if (Object.keys(errors).length === 0) {
      console.log(data);
    }
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" style={{ marginBottom: '30px' }}>
        <Paper elevation={4} style={{ marginTop: 15, backgroundColor: 'black' }}>
          <Slider />
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Paper elevation={4} style={{ marginTop: 15 }}>
          <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Pide tu Cita</h2>
          <SelectFieldInputOnChange 
              name={'prueba'}
              control={control} 
              label={'prueba'}
              errors={!!errors.prueba}
              helperText={errors.prueba ? errors.prueba?.message : null}
              defaultValue={"www"}
              onChange={handleChange}
              value={age}     
          />
          <TextFieldInput name={'placa'} control={control} label={'Placa'} type={'text'} errors={!!errors.placa}
            helperText={errors.placa ? errors.placa?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'ncedula'} control={control} label={'Numero de Cédula'} type={'text'} errors={!!errors.ncedula}
            helperText={errors.ncedula ? errors.ncedula?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'nombreyapellido'} control={control} label={'Nombre y Apellido'} type={'text'} errors={!!errors.nombreyapellido}
            helperText={errors.nombreyapellido ? errors.nombreyapellido?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'celular'} control={control} label={'Celular'} type={'text'} errors={!!errors.celular}
            helperText={errors.celular ? errors.celular?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'marca'} control={control} label={'Marca'} type={'text'} errors={!!errors.marca}
            helperText={errors.marca ? errors.marca?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'modelov'} control={control} label={'Modelo del Vehículo'} type={'text'} errors={!!errors.modelov}
            helperText={errors.modelov ? errors.modelov?.message : null}
            defaultValue={""} />

          <TextFieldInput name={'tipodeservicio'} control={control} label={'Tipo de Servicio'} type={'text'} errors={!!errors.tipodeservicio}
            helperText={errors.tipodeservicio ? errors.tipodeservicio?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'tipoajuste'} control={control} label={'Tipo de Ajuste'} type={'text'} errors={!!errors.tipoajuste}
            helperText={errors.tipoajuste ? errors.tipoajuste?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'nota'} control={control} label={'Nota'} type={'text'} errors={!!errors.nota}
            helperText={errors.nota ? errors.nota?.message : null}
            defaultValue={""} />
          <TextFieldInput name={'sucursal'} control={control} label={'Sucursal'} type={'text'} errors={!!errors.sucursal}
            helperText={errors.sucursal ? errors.sucursal?.message : null}
            defaultValue={""} />
          <Container maxWidth="sm">
            <Button onClick={handleSubmit(formSubmitHandler)} variant="contained" style={{ width: "100%", marginBottom: 12, backgroundColor: '#2f335e' }} endIcon={<SendIcon />} >
              Enviar
            </Button>
          </Container>
        </Paper>
      </Container>

    </div >
  )
}

export default index;

