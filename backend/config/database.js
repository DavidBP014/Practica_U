const { Sequelize } = require('sequelize');
require('dotenv').config();

// Asegúrate de que las claves coincidan exactamente con las de tu archivo .env
const sequelize = new Sequelize(
    process.env.MYSQL_DB, // Nombre de la base de datos
    process.env.MYSQL_USER, // Usuario
    process.env.MYSQL_PASSWORD, // Contraseña
    {
        host: process.env.MYSQL_HOST, // Host
        dialect: 'mysql', // Especificando el dialecto
        pool: { // Configuración del pool de conexiones
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

console.log(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, process.env.MYSQL_HOST);


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // sequelize.sync(); // Descomenta esta línea si necesitas sincronizar modelos
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB }; // Exporta tanto la instancia de Sequelize como la función connectDB
