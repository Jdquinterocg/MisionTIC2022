const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domicilioSchema = Schema ({
    fecha: String,
    hora: String,
    valor: Number,
    productos: Array,
},
{
    collection: "Domicilios",
});

module.exports = mongoose.model('Domicilios', domicilioSchema);