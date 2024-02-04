const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
  stor_id: { type: String, required: true, },
  store_passwd:{type: String, required: true},
  currency:{type: String, required: true},
  success_url:{type: String, required: true},
  fail_url:{type: String, required: true},
  cancel_url: { type: String, required: true },
  ipn_url: { type: String, required: true },
  init_Url: { type: String, required: true },
}, {
  timestamps: true,
  versionKey: false,
});

const PaymentSettingModel = mongoose.Model('payment-setting', DataModel)
module.exports = PaymentSettingModel;