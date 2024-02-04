const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const DataModel = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  shortDes: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: String,
    trim: true,
    required: true,
  },
  discount: {
    type: Boolean,
    trim: true,
    default: false,
  },
  discountPrice: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  stock: {
    type: Boolean,
    default: true,
    trim: true,
    required: true,
  },
  star: {
    type: String,
    trim: true,
    required: true,
  },
  remark: {
    type: String,
    trim: true,
    required: true,
    enum:['popular','regular','trending','new','top','special'],
  },
 

}, {
  timestamps: true,
  versionKey: false,
});

const ProductModel = mongoose.Model('product', DataModel)
module.exports = ProductModel;