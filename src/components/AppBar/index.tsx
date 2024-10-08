import React from 'react';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';

const AppBar = ({ position }: any) => {
  return (
    <MuiAppBar
      color='transparent'
      position={position}
      sx={{ paddingTop: 3, boxShadow: 0 }}
    >
      <Toolbar
        variant='dense'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Header />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
