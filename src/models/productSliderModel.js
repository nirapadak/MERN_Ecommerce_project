const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const DataModel = mongoose.Schema({
  title:{type:String, required: true,},
  description: { type: String, required: true, },
  price:{type: String, required: true,},
  img1: {type: String,required: true,},
  productID: {type: ObjectId,required: true,ref: 'product'},
}, {
  timestamps: true,
  versionKey: false,
});

const ProductSliderModel = mongoose.Model('product-Slider', DataModel)
module.exports = ProductSliderModel;