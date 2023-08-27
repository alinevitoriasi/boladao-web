import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { useController } from 'react-hook-form';

type ICheckbox = CheckboxProps & {
  control?: any;
  children?: React.ReactNode;
};

const Checkbox = ({ name, sx, control, children, ...rest }: ICheckbox) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name: name || '',
    control,
    defaultValue: '',
  });

  return (
    <>
      <MuiCheckbox
        sx={sx}
        name={name}
        onChange={onChange}
        inputRef={ref}
        value={value}
        {...rest}
      />
      {children}
    </>
  );
};

export default Checkbox;
