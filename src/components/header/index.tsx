import React from 'react'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
  return (
    <div>
        <nav>
          <Link to="/">Inicio </Link> |{" "}
          <Link to="/sobre">Sobre </Link> |{" "}
          <Link to="/contato">Contato </Link>|{" "}
        </nav>
    </div>
  );
}

export default Header
