import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Button from '../Button';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const AdminHeader = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Typography variant='body1' component='div'>
        Administrador
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        {/* <Link
          className={`link-button ${pathname === '/admin' && '__active'}`}
          to='/admin'
        >
          Posts
        </Link> */}
        {/* <Link
          className={`link-button ${pathname === '/campanhas' && '__active'}`}
          to='/teste'
        >
          Campanhas
        </Link> */}
        <Button text='Sair' variant='text' onClick={() => handleLogout()} />
      </Box>
    </>
  );
};

export default AdminHeader;
