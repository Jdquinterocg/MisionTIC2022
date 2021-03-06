const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema ({
    name: String,
    email: String,
    direccion: {
        type: String,
        default: ""
    },
    cedula: {
        type: Number,
        default: ""
    },
    telefono: {
        type: Number,
        default: ""
    },
    disable: {
        type: Boolean,
        default: false
    },
    password: String,
    // It Allow us to establish a relationship between user and deliveries databases
},
{
    collection: "Users",
});

module.exports = mongoose.model('users', userSchema);