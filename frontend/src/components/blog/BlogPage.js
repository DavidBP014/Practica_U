import React from 'react';
import { Link } from 'react-router-dom';
import salidaImage from '../../images/Imagen3.jpeg';
import dailyActivityImage from '../../images/imagen2.jpeg';
import playTimeImage from '../../images/Imagen1.jpeg';
import '../blog/Blog.css'


const BlogPage = () => {
    return (
        <div className="blog-section">
            <article className="blog-entry">
                <img src={salidaImage} alt="Salidas Recreativas" className="blog-image" />
                <h3>Salidas Recreativas Anuales</h3>
                <p>Cada año buscamos un lugar diferente...</p>
            </article>
            <article className="blog-entry">
                <img src={dailyActivityImage} alt="Día a día de nuestros niños" className="blog-image" />
                <h3>Día a Día de nuestros Niños</h3>
                <p>De 7 am a 4 pm, Lunes a Viernes...</p>
            </article>
            <article className="blog-entry">
                <img src={playTimeImage} alt="Juego y Diversión" className="blog-image" />
                <h3>Juego y Diversión</h3>
                <p>Una experiencia de aprendizaje diaria...</p>
            </article>
            <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
        </div>
    );
};

export default BlogPage;
