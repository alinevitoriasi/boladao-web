import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../header';
import Button from '../button';

const AppBar: React.FC = () => {
  return (
    <Box>
      <MuiAppBar position='static'>
        <Toolbar
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Header />
          <Button text='Login' color='secondary' />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
