import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type IInput = TextFieldProps & {
  label: JSX.Element | string;
};

const Input = ({ name, label, variant, sx, type, onChange }: IInput) => {
  return (
    <TextField
      name={name}
      sx={sx}
      label={label}
      variant={variant}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
