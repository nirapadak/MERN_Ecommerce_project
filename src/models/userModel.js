const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
  versionKey: false,
});

const userModel = mongoose.model('User', DataModel)
module.exports = userModel;