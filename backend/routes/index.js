const express = require("express");
const router = express.Router(); // Create mountable and modular routes handlers.
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegister = require("../validation/register.js");
const validateLogin = require("../validation/login");

let User = require("../models/users");
let Domicilios = require("../models/domicilios");
let Productos = require("../models/productos");

// Routes

// Validate register
router.post("/register", (req, res) => {
  // Check validation

  const { errors, isValid } = validateRegister(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      //Hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log("Heree" + err));
        });
      });
    }
  });
});

// Validate Login

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  console.log(req.body);
  //Check user
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const reqEmail = req.body.email;
  const reqPassword = req.body.password;

  User.findOne({ email: reqEmail }).then((user) => {
    // Exist?
    if (!user) {
      return res.status(404).json({ emailNotFound: "Email not found" });
    }

    // Check password
    bcrypt.compare(reqPassword, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT token
        const payload = {
          id: user.id,
          name: user.nombre,
        };

        //Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, //Expires in 1 year
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json("Password Incorrect");
      }
    });
  });
});

// -------------------------------------------------------

router.route("/usuario").get(async (req, res, next) => {
  await User.find({}, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      console.log("Llegué a la ruta")
      // console.log(data);
      res.json(data);
    }
  });
});

router.route("/domicilios").get(async (req, res, next) => {
  await Domicilios.find({}, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      res.json(data);
    }
  });
});
// ---------------------------------------------------------

// Productos

// Aseo
router.route("/aseo").get(async (req, res, next) => {
  let path = req.path.slice(1,-1);
  await Productos.find({ categoria: path }, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Lacteos
router.route("/lacteos").get(async (req, res, next) => {
  let path = req.path.slice(1,-1);
  await Productos.find({ categoria: path }, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});

// Fruver
router.route("/fruver").get(async (req, res, next) => {
  let path = req.path.slice(1,-1);
  await Productos.find({ categoria: path }, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// Varios
router.route("/varios").get(async (req, res, next) => {
  let path = req.path.slice(1,-1);
  await Productos.find({ categoria: path }, (err, data) => {
    if (err) {
      console.log(`Sorry, I can't do this: ${err.message}`);
      return next(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
