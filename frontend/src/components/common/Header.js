// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../common/Cabecera.css'; 

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <span className="brand-name">JARDINES INGLES</span>
    </div>
    <nav className="navigation">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/nosotros" className="nav-link">Nosotros</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
      <Link to="/contacto" className="nav-link">Contacto</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/location" className="nav-link">Location</Link>
    </nav>
  </header>
);

export default Header;
