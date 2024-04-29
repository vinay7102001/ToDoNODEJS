const User = require("../model/user")
const jwt = require('jsonwebtoken')

const Authenticate = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return next(new Error('Login First'))
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY)
  req.user = await User.findOne({ _id: decoded._id })
  next()
}

module.exports = Authenticate