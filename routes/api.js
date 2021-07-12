const express = require('express');
const router = express.Router();

// get a list of hills from db
router.get('/hills', (req, res) => {
  res.send({
    type: 'GET',
  });
});

// add new hill to db
router.post('/hills', (req, res) => {
  res.send({
    type: 'POST',
  });
});

// update the hill in db
router.put('/hills/:id', (req, res) => {
  res.send({
    type: 'PUT',
  });
});

// delete the hill from db
router.delete('/hills:id', (req, res) => {
  res.send({
    type: 'DELETE',
  });
});


// export this routes
module.exports = router;
