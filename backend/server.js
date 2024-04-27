const express = require('express');
const { sequelize } = require('../backend/config/database'); // Asegúrate de que el path sea correcto y destructure correctamente
const { protect } = require('./middleware/authMiddleware');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const jardinesRoutes = require('./routes/jardinRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5002;


// Autenticar y sincronizar con la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // Iniciar el servidor solo si la conexión a la base de datos es exitosa
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.send('API is running...');
});

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
