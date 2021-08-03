const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');


// Connecting to db
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Db connected successfully'))
.catch(err => console.log(err));

// Importing routes
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(morgan('dev')); //Message in the console that tell us the petition our app
app.use(express.urlencoded({extended: false})); // Understand the data sent by navigator

// settings
app.set('port', process.env.PORT || 3000); // Settings a port

// Routes
app.use('/', routes);

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});