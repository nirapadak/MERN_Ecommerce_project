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
  },
  brandId: {
    type: String,
    unique: true,
    required: true,
  },

}, {
  timestamps: true,
  versionKey: false,
});

const BrandModel = mongoose.model('brand', DataModel)
module.exports = BrandModel;