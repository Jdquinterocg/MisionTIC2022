const express = require('express');
const router = express.Router(); // Create mountable and modular routes handlers.

const User = require('../models/users');
const Domicilios = require('../models/domicilios');

// Routes

// User

router.get('/domicilios', async (req, res, next) => {
    await User.find((err, data) => {
        if (err) {
            console.log(`Sorry, I can't do this: ${err.message}`);
            return next(err);
        } else {
            // https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb
            // Takes the array "data" and tells it to "populate" it in domicilios path
            // from the data from Domicilios model
            Domicilios.populate(data, { path: "domicilios" }, (err, domicilios) => {
                if(err) {
                    console.log(`Sorry, I can't do this: ${err.message}`);
                    return next(err);
                } else {
                    res.status(200).send(domicilios)
                }
            });
            res.json(data);
        }
    })
});

module.exports = router;