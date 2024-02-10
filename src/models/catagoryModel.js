const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
  categoryName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  categoryImg: {
    type: String,
    trim: true,
    required: true,
  },
  categoryDes: {
    type: String,
  },
  categoryCreateManager: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }

}, {
  timestamps: true,
  versionKey: false,
});

const categoryModel = mongoose.model('categories', DataModel)
module.exports = categoryModel;