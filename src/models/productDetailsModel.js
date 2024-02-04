const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const DataModel = mongoose.Schema({
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
  },
  img3: {
    type: String,
  },
  img4: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  productID: {
    type: ObjectId,
    required: true,
    ref: 'product'
  },

}, {
  timestamps: true,
  versionKey: false,
});

const ProductDetailModel = mongoose.Model('product-Details', DataModel)
module.exports = ProductDetailModel;