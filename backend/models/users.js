const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Domicilios = mongoose.model('Domicilios');

const UserSchema = Schema ({
    name: String,
    apellido: String,
    direccion: String,
    telefono: Number,
    disable: {
        type: Boolean,
        default: false
    },
    domicilios: [{ // It Allow us to establish a relationship between user and deliveries databases
        type: Schema.ObjectId, 
        ref: `${Domicilios}`
    }]
});

module.exports = mongoose.model('Users', UserSchema);