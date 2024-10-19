import React from 'react';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';

const AppBar = () => {
  return (
    <MuiAppBar color='transparent' position={'fixed'} sx={{ boxShadow: 0 }}>
      <Header />
      {/* <Toolbar>
      </Toolbar> */}
    </MuiAppBar>
  );
};

export default AppBar;
