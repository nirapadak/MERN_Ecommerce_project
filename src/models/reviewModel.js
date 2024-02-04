const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const DataModel = mongoose.Schema({
  description: { type: String, required: true, },
  rating:{type: String, required: true},
  productID: { type: ObjectId, required: true },
  userID: { type: ObjectId, required: true },

}, {
  timestamps: true,
  versionKey: false,
});

const ReviewModel = mongoose.Model('review', DataModel)
module.exports = ReviewModel;