import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callApi from '../utils/api.js';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', familyType: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Intenta iniciar sesión
            const data = await callApi('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Asegúrate de establecer el tipo de contenido
                body: JSON.stringify(credentials),
            });
            // Si el inicio de sesión es exitoso, redirecciona a la página de ubicación
            navigate('/location'); // Usar la ruta de 'Routes' no el nombre del archivo
        } catch (error) {
            // Si el usuario no está registrado, intenta registrar
            const registerData = await callApi('/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Asegúrate de establecer el tipo de contenido
                body: JSON.stringify(credentials),
            });
            if (registerData) {
                // Si el registro es exitoso, redirecciona a la página de ubicación
                navigate('/location'); // Usar la ruta de 'Routes' no el nombre del archivo
            } else {
                // Manejar errores de registro, como mostrar un mensaje al usuario
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-text">
                <p>Luego de loguearte con nosotros podrás revisar a partir de ubicación el Jardín más cercano para que te acerques y charlemos un rato.</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                {/* Campos del formulario */}
                <input
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={handleChange}
                    placeholder="Introduce tu nombre"
                    required
                />
                {/* ...otros campos... */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
