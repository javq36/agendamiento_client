import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import  TextField  from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


const selectStyle = {
  width: '90%',
  margin: '5%',
  padding: '8px',
  border: '10px',
  marginBottom: '7px',
  marginTop: '2px',
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
    /* disabled */
  }) => {
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            select
            sx={selectStyle}
            label={label}
            type={type}
            variant={"filled"}
            {...field}
            onChange={onChange}
            error={errors}
            helperText={helperText}
            value={value}
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
  