import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonTypeMap, Stack, SxProps, Theme } from '@mui/material';

interface IButton {
  text: string;
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, color, size, sx, type, onClick }: IButton) => {
  return (
    <Stack>
      <MuiButton
        sx={sx}
        variant='contained'
        color={color || 'primary'}
        size={size}
        onClick={onClick}
        type={type}
      >
        {text}
      </MuiButton>
    </Stack>
  );
};

export default Button;
