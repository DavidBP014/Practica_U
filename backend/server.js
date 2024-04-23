const express = require('express');
const connectDB = require('./database');
const { protect } = require('./middleware/authMiddleware');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes'); // Asegúrate de crear este archivo en la carpeta de rutas
const jardinesRoutes = require('./routes/jardinRoutes'); // Asegúrate de crear este archivo en la carpeta de rutas
// Importa otros archivos de rutas aquí

console.log('URI:', process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

require('dotenv').config();

// Conectar a la base de datos
connectDB();

app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.send('API is running...');
});

const { errorHandler } = require('./middleware/errorMiddleware');

// Middleware de errores, debe ser el último middleware
app.use(errorHandler);

// Rutas del usuario
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes); // Ruta para autenticación
app.use('/api/jardines', jardinesRoutes); // Ruta para obtener la información de los jardines

// Usa otras rutas aquí, asegurándote de proteger las necesarias con el middleware 'protect'

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
