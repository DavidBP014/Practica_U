// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        // Comprueba si existe un token cuando el componente se monta
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(token);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token); // Almacenar el token en localStorage
        setAuth(token);
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remover el token de localStorage
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
