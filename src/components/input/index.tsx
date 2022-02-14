import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface IInput {
  label: string;
  variant: TextFieldProps['variant'];
}

const Input: React.FC<IInput> = ({ label, variant }) => {
  return <TextField label={label} variant={variant} />;
};

export default Input;
