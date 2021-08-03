const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('Users');

const DomicilioSchema = Schema ({
    fecha: String,
    hora: String,
    valor: Number,
    productos: Array,
    user: { // It Allow us to establish a relationship between user and deliveries databases
        type: Schema.ObjectId, 
        ref: `${User}`
    }
});

module.exports = mongoose.model('Domicilios', UserSchema);