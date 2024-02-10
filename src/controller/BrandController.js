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

// create brand =============================================================

exports.createBrand = async (req, res) => {
  try {
    let user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.brandCreateManager = user_id;

    await BrandModel.updateOne({ brandName: req.body.brandName, brandCreateManager: user_id },{$set: reqBody},{upsert: true})

    res.json({
      "massage": "brand saved successfully",
      "success": true
    })

  } catch (error) {
    res.json({
      "message": "Error creating brand",
      "error": error,
      "success": false
    })
  }
}