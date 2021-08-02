const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema ({
    fecha: String,
    hora: String,
    valor: Number,
    productos: Array,
});

module.exports = mongoose.model('Domicilios', UserSchema);