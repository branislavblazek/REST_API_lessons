const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  niceView: {
    type: Boolean,
    default: false,
  },
  // add an geo location
});

const Hill = mongoose.model('hill', HillSchema);

module.exports = Hill;
