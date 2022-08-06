import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const selectStyle = {
  width: "90%",
  margin: "5%",
  padding: "8px",
  border: "10px",
  marginBottom: "7px",
  marginTop: "2px",
};

export const TextFieldInput = ({
  name,
  control,
  label,
  type,
  errors,
  helperText,
  defaultValue,
  value
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          value={value}
          sx={fieldStyle}
          label={label}
          variant="filled"
          color={'success'} 
          focused={'true'}
          type={type}
          {...field}
          error={errors}
          helperText={helperText}
        />
      )}
    />
  );
};

export const SelectFieldInputOnChange = ({
  name,
  control,
  label,
  type,
  errors,
  helperText,
  defaultValue,
  options,
  onChange,
  value,
  id
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          select
          id={id}
          sx={selectStyle}
          label={label}
          type={type}
          variant={"filled"}
          {...field}
          onChange={onChange}
          error={errors}
          helperText={helperText}
          value={value}
          required
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
