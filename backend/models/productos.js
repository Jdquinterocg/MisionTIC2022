const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema ({
    categoria: String,
    descripcion: String,
    precio: Number,
    imagen: String
},
{
    collection: "productos"
});

module.exports = mongoose.model("productos", productosSchema);