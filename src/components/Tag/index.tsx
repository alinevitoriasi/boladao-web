import React from 'react';
import MuiChip from '@mui/material/Chip';

import { ChipTypeMap } from '@mui/material';

interface ITag {
  label?: string;
  color?: ChipTypeMap['props']['color'];
  size?: ChipTypeMap['props']['size'];
  variant?: ChipTypeMap['props']['variant'];
  onDelete?: React.EventHandler<any>;
}

const Tag = ({ label, color, size, variant, onDelete }: ITag) => {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      onDelete={onDelete}
      sx={{ marginRight: 2 }}
    />
  );
};

export default Tag;
