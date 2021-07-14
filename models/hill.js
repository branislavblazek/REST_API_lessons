const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crate geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

// create hill Scheme & Model
const HillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  description: {
    type: String,
    required: [true, 'Description field is required'],
  },
  isHard: {
    type: Boolean,
    default: false,
  },
  geometry: GeoSchema,
});

const Hill = mongoose.model('hill', HillSchema);

module.exports = Hill;
