import * as React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Slider o carrousel responsive
/* import { Slider } from '../components/shared/Slider'; */
import { Slider } from '../components/Slider';

// navbar
import { Navbar } from '../components/Navbar';

// formulario
import { TextFieldInput } from '../components/shared/TextInput';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';

// animaciones
import { motion } from "framer-motion"
import Button from '@mui/material/Button'



const digitsOnly = (value) => /^\d+$/.test(value)



const selectStyle = {
  width: '94%',
  margin: '3%',
  padding: '3px',
  border: '10px',
  borderRadius: '10px',
  marginBottom: '5px',
  marginTop: '4px',
};

const formularioSchema = yup
  .object({
    placa: yup
      .string()
      .required("Por favor ingrese el Numero de la Placa")
      .max(6, "Ingrese maximo 6 digitos"),
    ncedula: yup
      .string()
      .test('Digits only', 'Porfavor solo ingrese Digitos', digitsOnly)
      .required("Por favor ingrese el Numero de la Cedula")
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
    tipodeservicio: yup
      .string()
      .required("Por favor ingrese el Tipo del Servicio"),
    tipoajuste: yup
      .string()
      .required("Por favor ingrese el Tipo de Ajustes"),
    nota: yup
      .string()
      .required("Por favor ingrese la Nota"),
    sucursal: yup
      .string()
      .required("Por favor ingrese la Sucursal"),
    prueba: yup
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
        <Paper elevation={4} style={{ marginTop: 15 }}>
          <Slider />
        </Paper>
      </Container>
      <Container maxWidth="sm" style={{ marginBottom: '30px' }}>
        <Paper elevation={4} style={{ marginTop: 15 }}>
          <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Pide tu Cita</h2>
          <FormControl sx={selectStyle}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              name={'prueba'}
              value={age}
              control={control} 
              label={'prueba'} 
              type={'select'}
              variant="filled"
              onChange={handleChange}
              errors={!!errors.prueba}
              helperText={errors.prueba ? errors.prueba?.message : null}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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

