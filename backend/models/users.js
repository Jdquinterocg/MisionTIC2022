const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema ({
    name: String,
    apellido: String,
    direccion: String,
    telefono: Number,
    disable: {
        type: Boolean,
        default: false
    },
    // It Allow us to establish a relationship between user and deliveries databases
    domicilios: [{
        type: Schema.ObjectId, 
        ref: 'domicilios'
    }]
});

module.exports = mongoose.model('Users', userSchema);