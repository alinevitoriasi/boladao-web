import React from 'react';
import copy from 'copy-to-clipboard';

import Modal from '../Modal';
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

import { Typography } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

interface IShareModal {
  text?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareModal = ({ text, open, setOpen }: IShareModal) => {
  const styleTypography = {
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
  };

  return (
    <Modal title='Compartilhar' open={open} setOpen={setOpen}>
      <Typography sx={styleTypography} variant='body1'>
        <IconButton
          onClick={() => {
            text && copy(text);
          }}
        >
          <ContentCopyIcon />
        </IconButton>
        Copiar
      </Typography>

      <Typography sx={styleTypography} variant='body1'>
        <TwitterShareButton
          style={{ padding: 8 }}
          title={text}
          url={'https://peing.net/ja/'}
          // hashtags={['hashtag1', 'hashtag2']}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        Compartilhar no Twitter
      </Typography>

      <Typography sx={styleTypography} variant='body1'>
        <FacebookShareButton
          style={{ padding: 8 }}
          url={'https://peing.net/ja/'}
          quote={text}
          hashtag={'#hashtag'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        Compartilhar no Facebook
      </Typography>
    </Modal>
  );
};

export default ShareModal;
