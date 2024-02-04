const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const DataModel = mongoose.Schema({
  userID: { type: ObjectId, required: true },
  total: { type: String, required: true },
  vat: { type: String, required: true },
  payable: { type: String, required: true },
  cus_details: { type: String, required: true },
  ship_details: { type: String, required: true },
  tran_Id:{type: String, required: true},
  val_Id: {type: String, required: true, default: '0',},
  
  delivery_status: { type: String, required: true },
  payment_status: { type: String, required: true },
}, {
  timestamps: true,
  versionKey: false,
});

const InvoiceModel = mongoose.Model('invoices', DataModel)
module.exports = InvoiceModel;