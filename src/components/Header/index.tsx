import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './style.css';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className='__header'>
      <nav>
        <Link
          className={`link-button ${pathname === '/' && '__active'}`}
          to='/'
        >
          Inicio
        </Link>
        <span>|</span>
        <Link
          className={`link-button ${pathname === '/posts' && '__active'}`}
          to='/posts'
        >
          Posts
        </Link>
        <span>|</span>
        <Link
          className={`link-button ${pathname === '/novopost' && '__active'}`}
          to='/novopost'
        >
          Novo Post
        </Link>
        <span>|</span>
        {pathname === '/login' ? (
          <Link
            className={`link-button ${pathname === '/login' && '__active'}`}
            to='/cadastrar'
          >
            Cadastrar
          </Link>
        ) : (
          <Link
            className={`link-button ${pathname === '/cadastrar' && '__active'}`}
            to='/login'
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
