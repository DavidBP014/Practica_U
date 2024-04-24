import React from 'react';
import { Link } from 'react-router-dom';
import kidsPlaying from '../../images/imagen5.jpeg'; 
import '../nosotros/AboutUsPage.css'


const AboutUsPage = () => {
    return (
        <div className="about-section">
            <div className="about-image">
                <img src={kidsPlaying} alt="Niños jugando" />
            </div>
            <div className="about-content">
                <h2>NOSOTROS COMO ASOCIACION</h2>
                <h3>Jardines Ingles</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
            </div>
        </div>
    );
};

export default AboutUsPage;
