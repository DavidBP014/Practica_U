import React from 'react';
import salidaImage from '../path-to-your-images-folder/salida-image.jpg';
import dailyActivityImage from '../path-to-your-images-folder/daily-activity-image.jpg';
import playTimeImage from '../path-to-your-images-folder/play-time-image.jpg';
import './BlogPage.css';


const BlogPage = () => {
    return (
        <div className="blog-section">
            <article className="blog-entry">
                <img src={salidaImage} alt="Salidas Recreativas" className="blog-image" />
                <h3>Salidas Recreativas Anuales</h3>
                <p>Cada año buscamos un lugar diferente...</p>
                <button className="btn-contact">Contáctanos</button>
            </article>
            <article className="blog-entry">
                <img src={dailyActivityImage} alt="Día a día de nuestros niños" className="blog-image" />
                <h3>Día a Día de nuestros Niños</h3>
                <p>De 7 am a 4 pm, Lunes a Viernes...</p>
                <button className="btn-contact">Contáctanos</button>
            </article>
            <article className="blog-entry">
                <img src={playTimeImage} alt="Juego y Diversión" className="blog-image" />
                <h3>Juego y Diversión</h3>
                <p>Una experiencia de aprendizaje diaria...</p>
                <button className="btn-contact">Contáctanos</button>
            </article>
        </div>
    );
};

export default BlogPage;
