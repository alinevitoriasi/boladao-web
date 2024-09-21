import React, { useState } from 'react';

import {
  ButtonTypeMap,
  CardActionArea,
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
import AccountBoxIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import ShareModal from '../ShareModal';
import Tag from '../Tag';

interface ICard {
  color?: ButtonTypeMap['props']['color'];
  size?: ButtonTypeMap['props']['size'];
  sx?: SxProps<Theme>;
  text?: string;
  author?: string;
  date?: string;
  tags?: Array<string>;
  noAction?: boolean;
  handleEdit?: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  height?: number;
}

const Card = ({
  text,
  author,
  date,
  tags,
  noAction,
  handleEdit,
  handleDelete,
  handleClick,
  sx,
  height,
}: ICard) => {
  const [modalView, setModalView] = useState(false);
  const tamanho = author && author?.length > 4 ? author?.length - 4 : 0;
  return (
    <>
      <ShareModal open={modalView} setOpen={setModalView} />
      <MUICard
        sx={{
          m: 3,
          marginTop: 0,
          boxShadow: 0,
          minWidth: 350,
          height: height || 350,
          borderRadius: 3,
          backgroundColor: '#DAE1E1',
          ...sx,
        }}
      >
        <CardActionArea
          sx={{
            padding: 3,
          }}
          disabled={!handleClick}
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
              <Box gap={2} display='flex'>
                {!noAction && (
                  <>
                    <IconButton
                      aria-label='settings'
                      onClick={(event) => {
                        event.stopPropagation();
                        handleEdit && handleEdit(event);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label='settings'
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDelete && handleDelete(event);
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </>
                )}
                {tags?.length
                  ? tags.map((tag, index) => <Tag key={index} label={tag} />)
                  : ''}
              </Box>
            }
          />
          <CardContent
            sx={{ paddingLeft: 2, boxSizing: 'border-box', overflow: 'hidden' }}
          >
            <Typography
              sx={{
                paddingLeft: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              variant='body1'
            >
              {text}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <IconButton onClick={() => setModalView(true)}>
              <ShareIcon />
            </IconButton>
          </CardActions> */}
        </CardActionArea>
      </MUICard>
    </>
  );
};

export default Card;
