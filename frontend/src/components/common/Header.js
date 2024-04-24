import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      {/* Agrega tus enlaces aquí */}
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/login">Login</Link>
      <Link to="/location">Locacion</Link>
    </nav>
  </header>
);

export default Header;
