// src/components/LoginPage.js
import React, { useState } from 'react';
import callApi from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
        const [credentials, setCredentials] = useState({ email: '', password: '' });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');
        const { login } = useAuth();

        const handleChange = (e) => {
            setCredentials({...credentials, [e.target.name]: e.target.value });
        };

        const handleSubmit = async(event) => {
            event.preventDefault();
            setLoading(true);
            setError('');

            try {
                const data = await callApi('/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                });
                login(data.token); // Guardar el token en el contexto y en localStorage
                setLoading(false);
            } catch (error) {
                setError('Falló el inicio de sesión. Verifica tus credenciales.');
                setLoading(false);
            }
        };

        return ( <
            div > {
                error && < p > { error } < /p>} <
                form onSubmit = { handleSubmit } > { /* Form fields */ } <
                label htmlFor = "email" > E - mail: < /label> <
                    input
                id = "email"
                type = "email"
                name = "email"
                value = { credentials.email }
                onChange = { handleChange }
                required /
                >
                <
                label htmlFor = "password" > Password: < /label> <
                    input
                id = "password"
                type = "password"
                name = "password"
                value = { credentials.password }
                onChange = { handleChange }
                required /
                >
                <
                button type = "submit"
                disabled = { loading } > { loading ? 'Cargando...' : 'Login' } <
                /button> <
                /form> <
                /div>
            );
        };

        export default LoginPage;