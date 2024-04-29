import React, { useState } from 'react';
import '../contact/Contact.css'

const ContactPage = () => {
    // Estados para cada campo del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [familyType, setFamilyType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías llamar a una función API para enviar estos datos
        console.log({ name, email, familyType, message });
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contacto</h2>
                <p>La comunicación es crucial para nuestro apoyo!</p>
                <p>Nuestro proyecto pedagógico está basado en el movimiento, la conciencia emocional y el aprendizaje experiencial, para atender las necesidades actuales de la educación. Respetamos los ritmos de aprendizaje de los niños, sin adelantar procesos. Entregamos a los colegios niños con pensamiento crítico, capacidad de análisis, resolución de problemas e independencia.</p>
                <p>E-mail de contacto: Mariaantonia@gmail.com</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <label htmlFor="familyType">Tipo de Familiar:</label>
                <input 
                    type="text"
                    id="familyType"
                    value={familyType}
                    onChange={(e) => setFamilyType(e.target.value)}
                />
                
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactPage;
