const express = require('express');

// set up express app
const app = express();

//listen for requests
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

// initialize routes
app.use('/api', require('./routes/api'));
