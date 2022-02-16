import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonTypeMap, SxProps, Theme } from '@mui/material';
interface IButton {
  text: string;
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
}
const Button: React.FC<IButton> = ({ text, color, size, sx }) => {
  return (
    <MuiButton
      sx={sx}
      variant='contained'
      color={color || 'primary'}
      size={size}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
