import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../../images/imagen4.jpg';
import '../home/Home.css'

const HomePage = () => {
    return (
        <div className="home-container">
            <main className="home-main">
                <section className="home-hero">
                    <img src={mainImage} alt="Niño dibujando" />
                    <h1>El Sistema Nacional de Bienestar Familiar (SNBF) es el conjunto de agentes, instancias de coordinación y articulación para dar cumplimiento a la protección integral de los niños, niñas y adolescentes y el fortalecimiento de los jóvenes y familias en los ámbitos nacional, departamental, distrital y municipal.</h1>
                    <p></p>
                    {/* Envuelve el botón en una div con la clase btn-container */}
                    <div className="btn-container">
                        <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
