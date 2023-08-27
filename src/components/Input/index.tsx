import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController } from 'react-hook-form';

type IInput = TextFieldProps & {
  label: JSX.Element | string;
  control?: any;
};

const Input = ({
  name,
  label,
  variant,
  sx,
  type,
  control,
  ...rest
}: IInput) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name: name || '',
    control,
    defaultValue: '',
  });

  return (
    <TextField
      sx={sx}
      name={name}
      label={label}
      variant={variant}
      onChange={onChange}
      inputRef={ref}
      value={value}
      type={type}
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
};

export default Input;
