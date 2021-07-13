const express = require('express');
const router = express.Router();
const Hill = require('../models/hill.js');

// get a list of hills from db
router.get('/hills', (req, res, next) => {
  res.send({
    type: 'GET',
  });
});

// add new hill to db
router.post('/hills', (req, res, next) => {
  Hill.create(req.body)
  .then(result => {
    res.send(result);
  })
  .catch(next);
});

// update the hill in db
router.put('/hills/:id', (req, res, next) => {
  res.send({
    type: 'PUT',
  });
});

// delete the hill from db
router.delete('/hills/:id', (req, res, next) => {
  res.send({
    type: 'DELETE',
  });
});


// export this routes
module.exports = router;
