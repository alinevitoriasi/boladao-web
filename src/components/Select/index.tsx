import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useController } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type ISelectComponent = SelectProps & {
  label: JSX.Element | string;
  options: Array<string>;
  control?: any;
  name?: string;
};

const SelectComponent = ({
  name,
  label,
  options,
  control,
  sx,
}: ISelectComponent) => {
  const theme = useTheme();
  const [optionSelected, setOptionSelected] = React.useState<string[]>([]);

  const {
    field: { onChange, ref },
  } = useController({
    name: name || '',
    control,
    defaultValue: '',
  });

  const handleChange = (event: SelectChangeEvent<typeof optionSelected>) => {
    const {
      target: { value },
    } = event;
    onChange(event);

    setOptionSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={sx}>
        <InputLabel id='demo-multiple-chip-label'>{label}</InputLabel>
        <Select
          inputRef={ref}
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={optionSelected}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, optionSelected, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectComponent;
