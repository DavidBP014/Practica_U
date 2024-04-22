import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import callApi from '../utils/api';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', familyType: '' });
    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Intenta iniciar sesión
            const data = await callApi('/auth/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });
            // Si el inicio de sesión es exitoso, redirecciona a la página de ubicación
            history.push('./locationPage.js');
        } catch (error) {
            // Si el usuario no está registrado, intenta registrar
            try {
                const registerData = await callApi('/auth/register', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                });
                // Si el registro es exitoso, redirecciona a la página de ubicación
                history.push('./locationPage.js');
            } catch (registerError) {
                // Manejar errores de registro, como mostrar un mensaje al usuario
                console.error('Registration failed:', registerError);
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
