import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { Box } from '@mui/system';

const HomeHeader = () => {
  const { pathname } = useLocation();
  const color = pathname === '/' ? 'white' : '#032254';
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Link
        style={{ color: color }}
        className={`link-button ${pathname === '/' && '__active'}`}
        to='/'
      >
        Início
      </Link>
      <Link
        style={{ color: color }}
        className={`link-button ${pathname === '/sobre' && '__active'}`}
        to='/sobre'
      >
        Sobre
      </Link>
      <Link
        style={{ color: color }}
        className={`link-button ${pathname === '/ajuda' && '__active'}`}
        to='/'
      >
        Ajuda
      </Link>
      {pathname === '/login' ? (
        <Link
          style={{ color: color }}
          className={`link-button ${pathname === '/login' && '__active'}`}
          to='/cadastrar'
        >
          Cadastrar
        </Link>
      ) : (
        <Link
          style={{ color: color }}
          className={`link-button ${pathname === '/cadastrar' && '__active'}`}
          to='/login'
        >
          Entrar
        </Link>
      )}
    </Box>
  );
};

export default HomeHeader;
