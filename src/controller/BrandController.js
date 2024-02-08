const BrandModel = require('../models/BrandModel');

exports.BrandList = async (req, res) => {
  try {
    let brandList = await BrandModel.find();
    res.json({
      "success": true,
      "data": brandList
    })
  } catch (error) {
     res.status(200).json({
      success: true,
      message: "Brand List",
    }) 
  }
}