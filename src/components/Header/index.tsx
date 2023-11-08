import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Button from '../Button';
import { SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';

import PostAddIcon from '@mui/icons-material/PostAdd';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const username = localStorage.getItem('username');
  return (
    <>
      {!isAuthenticated() ? (
        <>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Link
              className={`link-button ${pathname === '/' && '__active'}`}
              to='/'
            >
              Início
            </Link>
            <Link
              className={`link-button ${pathname === '/sobre' && '__active'}`}
              to='/'
            >
              Sobre
            </Link>
            <Link
              className={`link-button ${pathname === '/ajuda' && '__active'}`}
              to='/'
            >
              Ajuda
            </Link>
            {pathname === '/login' ? (
              <Link
                className={`link-button ${pathname === '/login' && '__active'}`}
                to='/cadastrar'
              >
                Cadastrar
              </Link>
            ) : (
              <Link
                className={`link-button ${
                  pathname === '/cadastrar' && '__active'
                }`}
                to='/login'
              >
                Entrar
              </Link>
            )}
          </Box>
        </>
      ) : (
        <>
          <Typography variant='body1' component='div'>
            Oi, {username}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Link
              className={`link-button ${
                pathname === '/novopost' && '__active'
              }`}
              to='/novopost'
            >
              <SvgIcon component={PostAddIcon} />
            </Link>
            <Link
              className={`link-button ${pathname === '/posts' && '__active'}`}
              to='/posts'
            >
              Posts
            </Link>
            <Link
              className={`link-button ${pathname === '/myposts' && '__active'}`}
              to='/myposts'
            >
              Minhas publicações
            </Link>
            <Button text='Sair' variant='text' onClick={() => handleLogout()} />
          </Box>
        </>
      )}
    </>
  );
};

export default Header;
