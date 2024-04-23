// database.js o donde esté tu código de conexión a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;
