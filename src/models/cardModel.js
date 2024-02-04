const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const DataModel = mongoose.Schema({
  productID: { type: ObjectId, required: true },
  userID: { type: ObjectId, required: true },
  qty: {type: String,required: true,},
  price: {type: String,required: true,},
  color: {type: String,required: true,},
  size: {type: String,required: true,},

}, {
  timestamps: true,
  versionKey: false,
});

const CardModel = mongoose.Model('cards', DataModel)
module.exports = CardModel;