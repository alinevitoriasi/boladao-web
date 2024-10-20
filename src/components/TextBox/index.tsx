import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController } from 'react-hook-form';

type ITextBox = TextFieldProps & {
  label: JSX.Element | string;
  control?: any;
};

const TextBox = ({
  label,
  variant,
  sx,
  rows,
  maxRows,
  placeholder,
  control,
  name,
  disabled,
}: ITextBox) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name: name || '',
    control,
    rules: { required: true },
    defaultValue: '',
  });

  return (
    <TextField
      multiline
      disabled={disabled}
      sx={{ ...sx, backgroundColor: 'white' }}
      name={name}
      label={label}
      variant={variant}
      onChange={onChange}
      inputRef={ref}
      value={value}
      rows={rows}
      maxRows={maxRows}
      placeholder={placeholder}
    />
  );
};

export default TextBox;
