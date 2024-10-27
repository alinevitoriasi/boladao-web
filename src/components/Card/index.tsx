import React, { useState } from 'react';

import {
  ButtonTypeMap,
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
import VisibilityIcon from '@mui/icons-material/Visibility';

import ShareModal from '../ShareModal';
import Tag from '../Tag';
import { Link } from 'react-router-dom';

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
  height?: number;
  alert?: string;
  to?: string;
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
  isAdmin,
  sx,
  height,
  alert,
  to,
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
          boxShadow: '5px 5px 10px #d0d0d0,-5px -5px 10px #f0f0f0',
          minWidth: 350,
          height: height,
          borderRadius: 3,
          backgroundColor: '#FFFFFF',
          ...sx,
        }}
      >
        <Box
          sx={{
            padding: 3,
            height: '100%',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'flex-start',
          }}
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
                  {!noAction && (
                    <>
                      {to && (
                        <Link to={to}>
                          <IconButton
                            aria-label='settings'
                            onClick={(event) => {
                              event.stopPropagation();
                              handleEdit && handleEdit(event);
                            }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Link>
                      )}
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
                <Alert severity={alert?.includes('cvv') ? 'info' : 'warning'}>
                  {alert}
                </Alert>
              )}
            </CardActions>
          </div>
        </Box>
      </MUICard>
    </>
  );
};

export default Card;
