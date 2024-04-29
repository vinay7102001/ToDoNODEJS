const mongoose = require('mongoose')

const TaskFormate = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  IsMarked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now())
  }
})

const Task = mongoose.model('Task', TaskFormate)

module.exports = Task