import React from 'react';
import { Radio as MuiRadio, RadioProps } from '@mui/material';
import { useController } from 'react-hook-form';

type IRadio = RadioProps & {
  control?: any;
  children?: React.ReactNode;
};

const Radio = ({
  name,
  sx,
  control,
  value: optionValue,
  children,
  ...rest
}: IRadio) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name: name || '',
    control,
    defaultValue: '',
  });

  return (
    <>
      <MuiRadio
        sx={sx}
        name={name}
        onChange={onChange}
        inputRef={ref}
        value={optionValue}
        checked={value === optionValue?.toString()}
        {...rest}
      />
      {children}
    </>
  );
};

export default Radio;
