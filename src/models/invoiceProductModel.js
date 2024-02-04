const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const DataModel = mongoose.Schema({

  userID: { type: ObjectId, required: true },
  invoiceID: { type: ObjectId, required: true },
  productID: { type: ObjectId, required: true },

  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  color: { type: Number, required: true },

}, {
  timestamps: true,
  versionKey: false,
});

const InvoiceProductModel = mongoose.Model('invoice-product', DataModel)
module.exports = InvoiceProductModel;