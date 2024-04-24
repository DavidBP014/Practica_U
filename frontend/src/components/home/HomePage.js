import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../../images/imagen4.jpeg';
import '../home/Home.css'


const HomePage = () => {
    return (
        <div className="home-container">
            {/* Omitiendo la navegación para centrarnos en el contenido principal */}
            <main className="home-main">
                <section className="home-hero">
                    <img src={mainImage} alt="Niño dibujando" />
                    <h1>El mejor cuidado a un click de distancia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
