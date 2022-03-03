import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '../Header';
import Button from '../Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const AppBar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <Box>
      <MuiAppBar position='static'>
        <Toolbar
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Header />

          {pathname === '/login' ? (
            <Button
              text='Cadastrar'
              color='secondary'
              onClick={() => navigate('/cadastrar')}
            />
          ) : (
            <Button
              text='Login'
              color='secondary'
              onClick={() => navigate('/login')}
            />
          )}
          <Link className='link-button' to='/login'></Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
