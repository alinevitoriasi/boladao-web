import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';

interface IModal {
  title: string;
  text?: string;
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ title, text, open, setOpen, onSuccess, children }: IModal) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccess = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> //Vamos usar esse event?
  ) => {
    onSuccess && onSuccess(e);
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose}>
            <CloseIcon color='error' />
          </IconButton>
          <IconButton onClick={handleSuccess}>
            <CheckIcon color='success' />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
