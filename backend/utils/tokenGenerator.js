// backend/utils/tokenGenerator.js
const jwt = require('jsonwebtoken');

/**
 * Genera un token JWT a partir de un ID de usuario.
 * 
 * @param {string} userId El ID del usuario para el cual se genera el token.
 * @returns {string} Un token JWT.
 */
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Configura el tiempo de expiración del token
    });
};

module.exports = generateToken;