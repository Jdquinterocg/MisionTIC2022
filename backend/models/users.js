const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema ({
    name: String,
    direccion: String,
    telefono: Number,
    disable: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Users', UserSchema);