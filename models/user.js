var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uid: {type: String, required: true, unique: true},
  favourites:[{type: String, unique: true}],
  psn: {type: String},
  xbl: {type: String},
  steam: {type: String}
})

module.exports = mongoose.model('User', UserSchema);