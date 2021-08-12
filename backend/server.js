const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Middleware
app.use(morgan("dev")); //Message in the console that tell us the petition our app
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
); // Understand the data sent by navigator
app.use(function (req, res, next) {
  console.log(req.method + " " + req.headers.host + req.url);
  next();
});

app.use(cors());

// Db config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log('Sorry, error: ' + err.message));

// Importing routes
const routes = require("./routes/index");


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use('/', routes);

//Starting the server
// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});