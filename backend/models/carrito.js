const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema ({
    pedidos: [{}],
    cantidad: {
        type: Number,
        // default: 1
    }
},
{
    collection: "carrito"
});

module.exports = mongoose.model("infoCarrito", carritoSchema);