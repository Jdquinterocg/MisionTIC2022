// Allow us authentic the endpoints
const JwtStrategy = require("passport-jwt").Strategy; // Middleware
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");

const opts = {};

// Extract the header like a BearerToken (Token portador)
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  // Call a middleware function
  passport.use(
    // jwt_payload = useful part of the token
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user); //DONE!
          }

          return done(null, false); //Sorry it can´t be realized
        })
        .catch((err) => console.log(err));
    })
  );
};
