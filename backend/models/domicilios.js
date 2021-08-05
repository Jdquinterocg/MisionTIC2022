const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domicilioSchema = Schema ({
    _id: Schema.Types.ObjectId,
    fecha: String,
    hora: String,
    valor: Number,
    productos: Array,
},
{
    collection: "Domicilios",
});

module.exports = mongoose.model('Domicilios', domicilioSchema);