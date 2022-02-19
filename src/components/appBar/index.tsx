import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';
import Button from '../Button';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <Box>
      <MuiAppBar position='static'>
        <Toolbar
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Header />
          <Link className='link-button' to='/login'>
            <Button text='Login' color='secondary' />
          </Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
