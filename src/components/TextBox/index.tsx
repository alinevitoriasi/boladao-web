import React from 'react';
import {
  FormControl,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
} from '@mui/material';

interface ITextBox {
  sx?: SxProps<Theme>;
  label?: string;
  variant?: TextFieldProps['variant'];
  maxRows?: number;
  rows?: number;
  placeholder?: string;
}

const TextBox = ({
  label,
  variant,
  sx,
  rows,
  maxRows,
  placeholder,
}: ITextBox) => {
  return (
    <FormControl fullWidth>
      <TextField
        multiline
        sx={sx}
        placeholder={placeholder}
        label={label}
        rows={rows}
        maxRows={maxRows}
        variant={variant}
      />
    </FormControl>
  );
};

export default TextBox;
