const jwt = require('jsonwebtoken')

const sendCookie = async (user, res, msg) => {
  const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY)

  res.cookie('token', token, {
    HttpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: "none",
    secure: true
  }).json({
    success: true,
    massage: msg
  })
}

module.exports = sendCookie