import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div>
      <nav>
        <Link className='link-button' to='/'>
          Inicio
        </Link>
        <Link className='link-button' to='/posts'>
          Posts
        </Link>
        <Link className='link-button' to='/novopost'>
          Novo Post
        </Link>
      </nav>
    </div>
  );
};

export default Header;
