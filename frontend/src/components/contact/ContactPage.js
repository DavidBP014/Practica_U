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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p>E-mail: hello@reallygreatsite.com</p>
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
