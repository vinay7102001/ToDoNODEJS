const mongoose = require('mongoose')

const userDataFormate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    select: true
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now())
  }
})

const User = mongoose.model('User', userDataFormate)

module.exports = User