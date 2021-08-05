const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


// Connecting to db
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Db connected successfully'))
.catch(err => console.log(err));

// Importing routes
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(morgan('dev')); //Message in the console that tell us the petition our app
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);// Understand the data sent by navigator
app.use(cors());

// settings
app.set('port', process.env.PORT || 3000); // Settings a port

// Routes
app.use('/', routes);

//Starting the server
// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server on port ${app.get('port')}`);
});