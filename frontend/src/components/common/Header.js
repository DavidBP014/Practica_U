import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( <
        header >
        <
        nav >
        <
        Link to = "/" > Inicio < /Link> <
        Link to = "/nosotros" > Nosotros < /Link> <
        Link to = "/blog" > Blog < /Link> <
        Link to = "/contacto" > Contacto < /Link> <
        Link to = "/login" > Login < /Link> <
        Link to = "/ubicacion" > Ubicación < /Link> <
        /nav> <
        /header>
    );
};

export default Header;