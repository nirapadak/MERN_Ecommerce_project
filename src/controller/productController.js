const ProductModel = require('../models/productModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// all products get -----------------------------------
exports.allProduct = async (req, res) => {

  try {
    let product = await ProductModel.find();
    res.json({
      "massage": "successful",
      "success": true,
      "data": product
    })
  } catch (error) {
    res.status(200).json({
      success: true,
      message: "Product Details",
    })
  }
}

// create product ---------------------------------------------

exports.createProduct = async (req, res) => {
  try {
    let user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.productManager = user_id;
     let productCreate = await ProductModel.updateOne(
       { image: req.body.image, title: req.body.title,shortDes: req.body.shortDes},
      {$set: reqBody},
      {upsert: true},
    );
    res.json({
      "massage": "product saved successfully",
      "success": true,
      "data": productCreate
    })
  } catch (error) {
    res.json({
      "massage": "product create failed",
      "success": false,
      "error": error
    })
  }
}


exports.sliderList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "sliderList",
  })
}



exports.listByCategory = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "List by category",
  })
}




exports.listByBrand = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "List by Brand",
  })
}

exports.listBySimilar = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "List by Similar",
  })
}

exports.listByKeyword = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "List by keyword",
  })
}

exports.productReview = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product review successfully",
  })
}



// product by remark ==================================================================
exports.productByRemark = async (req, res) => {
  try {
    let remark = req.params.remark;


    // let data = await ProductModel.find({remark: remark});
    let joinStage1 = {$lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "category" } }
    let joinStage2 = {$lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "brand" } }
    let match = { $match: { remark: remark } };

    let projectionStages = { $project: { "category._id": 0, "brand._id": 0, "remark": 0, } }
    let unWindCategory = { $unwind: "$category" };
    let unWindBrand = { $unwind: "$brand" };

    // product remark 
    const data = await ProductModel.aggregate(
      [match, joinStage1, joinStage2, unWindCategory, unWindBrand, projectionStages]);
    


     res.status(200).json({
      success: true,
       message: "Product by Remark successful",
      data: data,
    })
  } catch (error) {
    res.json({
      "massage": "product not remarked",
      "error": error,
      "success": false,
    })
  }
}



exports.wishList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "wish List",
  })
}

exports.cardList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Card List Successfully created",
  })
}

exports.createCardList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Create List Successfully created",
  })
}


exports.removeCardList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "remove card list",
  })
}