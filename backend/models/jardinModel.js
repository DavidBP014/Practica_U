const mongoose = require('mongoose');

const jardinSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
    },
    latitud: {
        type: Number,
        required: true,
    },
    longitud: {
        type: Number,
        required: true,
    },
    // Agrega cualquier otra propiedad que necesites para tus jardines
});

const Jardin = mongoose.model('Jardin', jardinSchema);

module.exports = Jardin;
