const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {type: String},
  city: {type: String},
  state: {type: String},
  phNumber: {type: String},
  genres: {type: String}
});

module.exports = mongoose.model('Restaurant', restaurantSchema)
