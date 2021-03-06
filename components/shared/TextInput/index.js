import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";



const fieldStyle = {
    width: '90%',
    margin: '5%',
    padding: '8px',
    border: '10px',
    marginBottom: '7px',
    marginTop: '2px',
};

export const TextFieldInput = ({ name, control, label, type, errors, helperText, defaultValue}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    sx={fieldStyle}
                    label={label}
                    variant="filled"
                    type={type}
                    {...field}
                    error={errors}
                    helperText={helperText}
                />
            )}
        />
    );
};
