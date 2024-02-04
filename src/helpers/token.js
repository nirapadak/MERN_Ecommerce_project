const jwt = require('jsonwebtoken')

exports.decodedToken = (token) => {
   return jwt.verify(token, process.env.SECRET_KEY);
}

