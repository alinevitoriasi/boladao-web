import React from 'react';
import { ButtonTypeMap, Stack, SxProps, Theme } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

interface IButton {
  text: string;
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  variant?: ButtonTypeMap['props']['variant'];
}

const Button = ({
  text,
  variant,
  color,
  size,
  sx,
  type,
  loading,
  onClick,
}: IButton) => {
  return (
    <Stack>
      <LoadingButton
        sx={sx}
        variant={variant || 'contained'}
        color={color || 'primary'}
        size={size}
        onClick={onClick}
        type={type}
        loading={loading}
      >
        {text}
      </LoadingButton>
    </Stack>
  );
};

export default Button;
