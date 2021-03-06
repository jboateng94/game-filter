var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uid: {type: String, required: true, unique: true},
  favourites:[{type: String, unique: true}]
})

module.exports = mongoose.model('User', UserSchema);