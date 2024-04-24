import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callApi from '../../utils/api';
import '../auth/Login.css'

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', familyType: '' });
    const [errorMessage, setErrorMessage] = useState('');
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
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <h1>Formulario de Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    INTRODUCE TU NOMBRE:
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
                </label>
                <label>
                    E-MAIL:
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                </label>
                <label>
                    TIPO DE FAMILIAR DEL MENOR:
                    <input type="text" name="familyType" value={credentials.familyType} onChange={handleChange} required />
                </label>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default LoginPage;