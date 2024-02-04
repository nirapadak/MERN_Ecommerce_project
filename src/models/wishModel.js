const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const DataModel = mongoose.Schema({
  productID: { type: ObjectId, required: true },
  userID: { type: ObjectId, required: true },

}, {
  timestamps: true,
  versionKey: false,
});

const WishesModel = mongoose.Model('Wishes', DataModel)
module.exports = WishesModel;