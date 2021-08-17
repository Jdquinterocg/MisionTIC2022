const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema ({
    pedidos: [{}]
},
{
    collection: "carrito"
});

module.exports = mongoose.model("infoCarrito", carritoSchema);