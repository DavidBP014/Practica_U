// controllers/authController.js

const User = require('../models/userModel');
const sequelize = require('../config/database');

exports.registerUser = async (req, res) => {
    try {
        // Chequea si el usuario ya está registrado
        const userExists = await User.findOne({ where: { email: req.body.email }});
        
        if (userExists) {
            return res.status(200).json({ message: "Login exitoso", token: "UnTokenAqui" });
        }
        
        // Si no existe, lo registra
        const newUser = await User.create(req.body);

        // Aquí deberías generar un token JWT también
        return res.status(201).json({ message: "Usuario registrado y logueado exitosamente", token: "UnTokenAqui" });

    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario" });
    }
};

exports.loginUser = async (req, res) => {
    // Aquí vendría tu lógica de login existente
};
