const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost/hilldb', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.Promise = global.Promise;

//listen for requests
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.use(express.static('public'));

// middleware for body parsing
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// middleware for error handling
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  });
});
