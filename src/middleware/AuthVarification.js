const jwt = require('jsonwebtoken')

exports.authVerify = (req, res, next) => {
  try {
    let token = req.header.Authorization
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.headers.email = decoded
    next();
  }catch{
    return res.json({
      massage: "invalid user and Authorization failed",
      success: false,
    })
  }
}
