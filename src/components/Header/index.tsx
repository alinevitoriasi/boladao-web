import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Button from '../Button';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='__header'>
      <nav>
        {!isAuthenticated() ? (
          <>
            <Link
              className={`link-button ${pathname === '/' && '__active'}`}
              to='/'
            >
              Inicio
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
                className={`link-button ${
                  pathname === '/cadastrar' && '__active'
                }`}
                to='/login'
              >
                Login
              </Link>
            )}
          </>
        ) : (
          <>
            <Link
              className={`link-button ${pathname === '/posts' && '__active'}`}
              to='/posts'
            >
              Posts
            </Link>
            <span>|</span>

            <Link
              className={`link-button ${
                pathname === '/novopost' && '__active'
              }`}
              to='/novopost'
            >
              Novo Post
            </Link>

            <Button text='Sair' variant='text' onClick={() => handleLogout()} />
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
