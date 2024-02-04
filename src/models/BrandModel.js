const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
  brandName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  brandImg: {
    type: String,
    trim: true,
    required: true,
  }

}, {
  timestamps: true,
  versionKey: false,
});

const BrandModel = mongoose.Model('Brand', DataModel)
module.exports = BrandModel;