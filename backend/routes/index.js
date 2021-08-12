const express = require('express');
const router = express.Router(); // Create mountable and modular routes handlers.

let User = require('../models/users');
let Domicilios = require('../models/domicilios');

// Routes
// User

// router.route('/domicilios').get(async (req, res, next) => {
//     await User.find((err, data) => {
//         console.log(data);
//         if (err) {
//             console.log(`Sorry, I can't do this: ${err.message}`);
//             return next(err);
//         } else {
//             // https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb
//             // Takes the array "data" and tells it to "populate" it in domicilios path
//             // from the data from Domicilios model
//             Domicilios.populate(data, { path: "domicilios" }, (err, domicilios) => {
//                 if(err) {
//                     console.log(`Sorry, I can't do this: ${err.message}`);
//                     return next(err);
//                 } else {
//                     // console.log(domicilios)
//                     res.json(domicilios)
//                     // res.send(data);
//                 }
//             });
//             // res.send(data);
//         }
//     })
// });

router.route('/usuario').get(async (req, res, next) => {
    await User.find({}, (err, data) => {
        if (err) {
            console.log(`Sorry, I can't do this: ${err.message}`);
            return next(err);
        } else {
            console.log(data)
            res.json(data);
        }
    })
});

router.route('/domicilios').get(async (req, res, next) => {
    await Domicilios.find({}, (err, data) => {
        if (err) {
            console.log(`Sorry, I can't do this: ${err.message}`);
            return next(err);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;