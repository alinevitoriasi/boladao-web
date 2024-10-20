import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import { Box } from '@mui/system';
import { Link as LinkMaterial } from '@mui/material';

const HomeHeader = () => {
  const { pathname, hash } = useLocation();
  const color = 'white';

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#1852C2',
        position: 'static',
      }}
    >
      <LinkMaterial
        style={{ color: color }}
        className={`link-button ${
          hash === '/#home' || (pathname === '/' && !hash && '__active')
        }`}
        href='/#home'
      >
        Início
      </LinkMaterial>
      <LinkMaterial
        style={{ color: color, textDecoration: 'none' }}
        className={`link-button ${hash === '#about' && '__active'}`}
        href='/#about'
      >
        Sobre
      </LinkMaterial>
      <LinkMaterial
        style={{ color: color, textDecoration: 'none' }}
        className={`link-button ${hash === '#security' && '__active'}`}
        href='/#security'
      >
        Segurança
      </LinkMaterial>
      <LinkMaterial
        style={{ color: color, textDecoration: 'none' }}
        className={`link-button ${hash === '#help' && '__active'}`}
        href='/#help'
      >
        Ajuda
      </LinkMaterial>
      {pathname === '/login' ? (
        <LinkMaterial
          style={{ color: color }}
          className={`link-button ${pathname === '/login' && '__active'}`}
          href='/cadastrar'
        >
          Cadastrar
        </LinkMaterial>
      ) : (
        <LinkMaterial
          style={{ color: color }}
          className={`link-button ${pathname === '/cadastrar' && '__active'}`}
          href='/login'
        >
          Entrar
        </LinkMaterial>
      )}
    </Box>
  );
};

export default HomeHeader;
