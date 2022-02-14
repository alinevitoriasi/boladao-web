import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <Link className='link-button' to='/'>
          Inicio
        </Link>
        <Link className='link-button' to='/sobre'>
          Sobre
        </Link>
        <Link className='link-button' to='/contato'>
          Contato
        </Link>
      </nav>
    </div>
  );
};

export default Header;
