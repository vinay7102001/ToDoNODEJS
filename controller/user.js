const User = require('../model/user.js')
const bcrypt = require('bcrypt')
const sendCookie = require('../utils/sendCookie.js')


const registerNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    let user = await User.findOne({ email })
    // console.log(user)
    if (user) {
      return next(new Error('Email is already registered'))
    }

    const hasPassword = await bcrypt.hash(password, 10)
    user = await User.create({ name, email, password: hasPassword })

    sendCookie(user, res, 'registration Sucessfully')
  } catch (error) {
    next(error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    let user = await User.findOne({ email }).select('+password')
    if (!user) {
      return next(new Error('Invalid password or Eamil'))
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return next(new Error('Invalid password or Eamil'))
    }

    sendCookie(user, res, 'login successfully')

  } catch (error) {
    next(error)
  }
}

const logout = (req, res) => {

  try {
    res.cookie('token', '', {
      expire: new Date(Date.now()),
      sameSite: "none",
      secure: true
    }).json({
      success: true,
      massage: 'logout successfully'
    })
  } catch (error) {
    next(error)
  }
}

const Profile = async (req, res) => {
  try {
    res.json({
      success: true,
      user: req.user
    })

  } catch (error) {
    next(error)
  }
}



module.exports = { registerNewUser, login, Profile, logout }