import { SxProps, TextField, TextFieldProps, Theme } from '@mui/material';
import React from 'react';

interface IInput {
  label: string;
  variant: TextFieldProps['variant'];
  sx?: SxProps<Theme>;
}

const Input = ({ label, variant, sx }: IInput) => {
  return <TextField sx={sx} label={label} variant={variant} />;
};

export default Input;
