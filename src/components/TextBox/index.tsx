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
  variant: TextFieldProps['variant'];
  maxRows?: number;
  rows?: number;
}

const TextBox = ({ label, variant, sx, rows, maxRows }: ITextBox) => {
  return (
    <FormControl fullWidth>
      <TextField
        multiline
        sx={sx}
        label={label}
        rows={rows}
        maxRows={maxRows}
        variant={variant}
      />
    </FormControl>
  );
};

export default TextBox;
