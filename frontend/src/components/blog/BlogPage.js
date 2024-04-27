import React from 'react';
import { Link } from 'react-router-dom';
import salidaImage from '../../images/imagen3.jpg';
import dailyActivityImage from '../../images/imagen2.jpg';
import playTimeImage from '../../images/Imagen1.jpg';
import '../blog/Blog.css'


const BlogPage = () => {
    return (
        <div className="blog-section">
            <article className="blog-entry">
                <img src={salidaImage} alt="Salidas Recreativas" className="blog-image" />
                <h3>Salidas Recreativas Anuales</h3>
                <p>Como asociasion nosotros siempre tenemos una salida y esparcimiento con nuestra asociasion y con las madres comunitarias las cuales cordinan y ejecutan correctamente la salida con los niños</p>
            </article>
            <article className="blog-entry">
                <img src={dailyActivityImage} alt="Día a día de nuestros niños" className="blog-image" />
                <h3>Día a Día de nuestros Niños</h3>
                <p>En nuestro dia a dia nosotros prestamos nuestra mejor atencion a nuestros infantes y tambien les ayudamos a su crecimiento con apoyo de profesionales en educacion infantil junto con su menu debidamente estipulado y estudiado por nuestra asociasion</p>
            </article>
            <article className="blog-entry">
                <img src={playTimeImage} alt="Juego y Diversión" className="blog-image" />
                <h3>Juego y Diversión</h3>
                <p>Tu hijo o hija jamas se sentira excluido o agredido ya que tenemos una gran comunidad, grndes espacios y aprendizaje de calidad para que en el mañana ellos puedan ser personas de excelentes valores y buena etica </p>
            </article>
            <Link to="/contacto" className="btn btn-primary">Contáctanos</Link>
        </div>
    );
};

export default BlogPage;
