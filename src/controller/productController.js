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


exports.productDetails = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Product Details",
  })
}

exports.listByRemark = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "List by Remark",
  })
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