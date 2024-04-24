import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callApi from '../utils/api.js';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', familyType: '' });
    const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar mensajes de error
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await callApi('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            navigate('/location'); // Usar la ruta de 'Routes', no el nombre del archivo
        } catch (error) {
            try {
                const registerData = await callApi('/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials),
                });
                if (registerData) {
                    navigate('/location'); // Navega a la página de ubicación si el registro es exitoso
                } else {
                    setErrorMessage('Registro fallido. Por favor, intenta nuevamente.'); // Establecer mensaje de error si el registro falla
                }
            } catch (registerError) {
                console.error('Registration failed:', registerError);
                setErrorMessage('Error durante el registro. Verifica tu conexión y tus datos.');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-text">
                <p>Luego de loguearte con nosotros podrás revisar a partir de ubicación el Jardín más cercano para que te acerques y charlemos un rato.</p>
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Muestra mensajes de error si los hay */}
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={handleChange}
                    placeholder="Introduce tu nombre"
                    required
                />
                {/* Asegúrate de incluir campos para el email y el tipo de familia si son necesarios */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
