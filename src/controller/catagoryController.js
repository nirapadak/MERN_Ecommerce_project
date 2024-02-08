const categoryModel = require('../models/catagoryModel'); 

exports.allCategories = async (req, res) => {
  try {
    let allCategories = await categoryModel.find();
    res.json({
      "success": true,
      "data": allCategories
    })
  } catch (error) {
    res.json({
      "success": false,
      "massage": "all"
    })
  }
}