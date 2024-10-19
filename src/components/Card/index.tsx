import React, { useState } from 'react';

import {
  ButtonTypeMap,
  CardActionArea,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
  Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import MUICard from '@mui/material/Card';
import AccountBoxIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import ReportIcon from '@mui/icons-material/Report';

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
  isAdmin?: boolean;
  handleEdit?: React.MouseEventHandler<HTMLButtonElement>;
  handleReport?: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  height?: number;
  alert?: boolean;
}

const Card = ({
  text,
  author,
  date,
  tags,
  noAction,
  handleEdit,
  handleReport,
  handleDelete,
  handleClick,
  isAdmin,
  sx,
  height,
  alert,
}: ICard) => {
  const [modalView, setModalView] = useState(false);
  const tamanho = author && author?.length > 4 ? author?.length - 4 : 0;

  const textHeight = () => {
    if (height && alert) return 200;
    if (height) return 500;
    return undefined;
  };

  return (
    <>
      <ShareModal open={modalView} setOpen={setModalView} />
      <MUICard
        sx={{
          m: 3,
          marginTop: 0,
          boxShadow: 0,
          minWidth: 350,
          height: height,
          borderRadius: 3,
          ...sx,
        }}
      >
        <CardActionArea
          sx={{
            padding: 3,
            height: '100%',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'flex-start',
          }}
          disabled={!handleClick}
          onClick={handleClick}
        >
          <div style={{ width: '100%' }}>
            <CardHeader
              disableTypography
              title={
                <Typography
                  variant='body2'
                  sx={{
                    display: 'flex',
                    verticalAlign: 'middle',
                    alignItems: 'center',
                  }}
                >
                  <SvgIcon component={AccountBoxIcon} sx={{ marginRight: 1 }} />
                  {author
                    ? author?.slice(0, 4)?.toLowerCase() + '*'.repeat(tamanho)
                    : ''}
                </Typography>
              }
              subheader={
                <Typography variant='subtitle1'>
                  {date?.toLowerCase()}
                </Typography>
              }
              action={
                <Box gap={2} display='flex'>
                  {isAdmin && (
                    <IconButton
                      aria-label='report'
                      onClick={(event) => {
                        event.stopPropagation();
                        handleReport && handleReport(event);
                      }}
                    >
                      <ReportIcon />
                    </IconButton>
                  )}
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
              sx={{
                paddingLeft: 2,
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <Typography
                sx={{
                  paddingLeft: 2,
                  overflow: 'hidden',
                }}
                variant='body1'
              >
                {text?.slice(0, textHeight())}
                {text && textHeight() && text?.length > (textHeight() || 0) && (
                  <>
                    {'...   '}
                    <strong style={{ whiteSpace: 'nowrap' }}>ver mais</strong>
                  </>
                )}
              </Typography>
            </CardContent>
            <CardActions>
              {alert && (
                <Alert severity='warning'>
                  Este post foi ocultado por conter conteúdo inadequado ou ser
                  classificado como SPAM. Caso acredite que houve um engano,
                  entre em contato com o suporte em: administrador@email.com
                </Alert>
              )}
            </CardActions>
          </div>
        </CardActionArea>
      </MUICard>
    </>
  );
};

export default Card;
