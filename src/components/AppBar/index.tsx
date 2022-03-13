import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';

const AppBar = () => {
  return (
    <Box>
      <MuiAppBar color='transparent' position='static' sx={{ paddingTop: 3 }}>
        <Toolbar
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Header />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
