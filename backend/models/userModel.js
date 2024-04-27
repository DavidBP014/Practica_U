// backend/models/userModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Asegúrate de que el path sea correcto y destructure correctamente
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'El nombre es obligatorio' },
      notEmpty: { msg: 'El nombre no puede estar vacío' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Por favor, introduce un email válido' },
      notNull: { msg: 'El email es obligatorio' },
      notEmpty: { msg: 'El email no puede estar vacío' },
    },
  },
  tipo_familiar: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: { msg: 'El tipo de familiar no puede estar vacío' },
    },
  },
}, {
  sequelize,
  modelName: 'Usuario',
  timestamps: false, // Si no necesitas los timestamps puedes desactivarlos
});

module.exports = Usuario;
