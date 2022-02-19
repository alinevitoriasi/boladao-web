import React from 'react';

import {
  ButtonTypeMap,
  CardActions,
  CardContent,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import MUICard from '@mui/material/Card';
import ShareIcon from '@mui/icons-material/Share';

interface ICard {
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
  text?: string;
}

const Card = ({ text }: ICard) => {
  return (
    <MUICard
      sx={{
        minWidth: 275,
        m: 3,
        borderRadius: 3,
        padding: 3,
        boxShadow: 0,
        backgroundColor: '#DAE1E1',
      }}
    >
      <CardContent>
        <Typography variant='body2'>{text}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </MUICard>
  );
};

export default Card;
