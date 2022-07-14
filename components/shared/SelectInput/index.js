import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";



const selectStyle = {
    width: '94%',
    margin: '3%',
    padding: '3px',
    border: '10px',
    borderRadius: '10px',
    marginBottom: '5px',
    marginTop: '4px',
};
const pruebaw = [
    {label: "wawd", value: 1},
  ]


export const SelectFieldInputOnChange = ({
    name,
    control,
    label,
    errors,
    helperText,
    defaultValue,
    options,
    onChange,
    value,
    disabled
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
                    variant="filled"
                    label={label}
                    options={pruebaw}
                    {...field}
                    onChange={onChange}
                    error={errors}
                    helperText={helperText}
                    value={value}
                    disabled={disabled}
                >
                    {pruebaw.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
};
