import React, { useState } from 'react';

import {
  ButtonTypeMap,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import MUICard from '@mui/material/Card';
import ShareIcon from '@mui/icons-material/Share';
import AccountBoxIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import ShareModal from '../ShareModal';

interface ICard {
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
  text?: string;
  author?: string;
  date?: string;
  noAction?: boolean;
  handleEdit?: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Card = ({
  text,
  author,
  date,
  noAction,
  handleEdit,
  handleDelete,
  handleClick,
}: ICard) => {
  const [modalView, setModalView] = useState(false);

  const tamanho = author && author?.length > 4 ? author?.length - 4 : 0;
  return (
    <>
      <ShareModal open={modalView} setOpen={setModalView} />
      <MUICard
        sx={{
          m: 3,
          boxShadow: 0,
          minWidth: 275,
          borderRadius: 3,
          backgroundColor: '#DAE1E1',
        }}
      >
        <CardActionArea
          sx={{
            padding: 3,
          }}
          // disabled={!handleClick}
          onClick={handleClick}
        >
          <CardHeader
            disableTypography
            title={
              <Typography
                variant='body2'
                sx={{
                  display: 'flex',
                  verticalAlign: 'middle',
                  alignItems: 'center', //Peryscopio >>>>>> | <3
                }}
              >
                <SvgIcon component={AccountBoxIcon} sx={{ marginRight: 1 }} />
                {author
                  ? author?.slice(0, 4)?.toLowerCase() + '*'.repeat(tamanho)
                  : ''}
              </Typography>
            }
            subheader={
              <Typography variant='subtitle1'>{date?.toLowerCase()}</Typography>
            }
            action={
              !noAction && (
                <Box gap={2} display='flex'>
                  <IconButton aria-label='settings' onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label='settings' onClick={handleDelete}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              )
            }
          />
          <CardContent>
            <Typography sx={{ paddingLeft: 2 }} variant='body1'>
              {text}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => setModalView(true)}>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </MUICard>
    </>
  );
};

export default Card;
