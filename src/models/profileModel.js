const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  cus_name: { type: String, required: true },
  cus_add: { type: String, required: true },
  cus_city: { type: String, required: true },
  cus_state: { type: String, required: true, default: 'Dhaka'},
  cus_postcode: { type: String, required: true },
  cus_country: { type: String, required: true, default: 'Bangladesh'},
  cus_phone: { type: String, required: true },
  cus_fax: { type: String, required: true, default: '0000', },
  
  ship_name: { type: String, required: true },
  ship_add: { type: String, required: true },
  ship_city: { type: String, required: true },
  ship_state: { type: String, required: true, default: 'Dhaka'},
  ship_postcode: { type: String, required: true },
  ship_country: { type: String, required: true, default: 'Bangladesh'},
  ship_phone: { type: String, required: true },

}, {
  timestamps: true,
  versionKey: false,
});

const profileModel = mongoose.model('profile', DataModel)
module.exports = profileModel;