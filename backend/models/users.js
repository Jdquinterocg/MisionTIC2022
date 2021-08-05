const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const domicilios = require('./domicilios');

const userSchema = Schema ({
    nombre: String,
    apellido: String,
    direccion: String,
    cedula: Number,
    telefono: Number,
    disable: {
        type: Boolean,
        default: false
    },
    // It Allow us to establish a relationship between user and deliveries databases
    // domicilios: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: 'Domicilios'

    // }]
},
{
    collection: "Users",
});

module.exports = mongoose.model('Users', userSchema);