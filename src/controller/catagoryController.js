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

// create category ===========================================

exports.createCategory = async (req, res) => {
  try {
    let user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.categoryCreateManager = user_id;
    await categoryModel.updateOne({ categoryName: req.body.name, categoryCreateManager: user_id }, { $set: reqBody }, { upsert: true })


    res.json({
      "message": "Category created successfully",
      "success": true,
    })
    
  } catch (error) {
    res.json({
      "error": error,
      "success": false,
      "message": "Error creating category",
      "category": {
        "massage": "already exists",
        "name": error.keyValue.categoryName
      }
    })
  }
}