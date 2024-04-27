import React from 'react';
import { Link } from 'react-router-dom';
import kidsPlaying from '../../images/imagen5.jpg'; 
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
                <p>El Instituto Colombiano de Bienestar Familiar (ICBF) es una entidad desconcentrada, con personería jurídica, autonomía administrativa y patrimonio propio, creado por la Ley 75 de 1968 y reorganizado conforme a lo dispuesto por la Ley 7 de 1979 y su Decreto Reglamentario No. 2388 de 1979, que mediante Decreto No. 4156 de 2011 fue adscrito al Departamento Administrativo para la Prosperidad Social.</p>
                <p>El Instituto Colombiano de Bienestar Familiar (ICBF) es la entidad del Estado colombiano que trabaja por la prevención y protección integral de la primera infancia, infancia y adolescencia, el fortalecimiento de los jóvenes y las familias en Colombia, brindando atención especialmente a aquellos en condiciones de amenaza, inobservancia o vulneración de sus derechos, llegando a cerca de 3 millones de colombianos con sus programas, estrategias y servicios de atención con 33 sedes regionales y 215 centros zonales en todo el país.</p>
                <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
            </div>
        </div>
    );
};

export default AboutUsPage;
