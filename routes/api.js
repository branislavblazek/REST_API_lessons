const express = require('express');
const router = express.Router();
const Hill = require('../models/hill.js');

// get a list of hills from db
router.get('/hills', (req, res, next) => {
  Hill.aggregate().near({
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 1000,
      spherical: true,
      distanceField: "dist.calculated",
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    })
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
  Hill.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// delete the hill from db
router.delete('/hills/:id', (req, res, next) => {
  Hill.findOneAndRemove(req.params.id)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err.message)
    });
});


// export this routes
module.exports = router;
