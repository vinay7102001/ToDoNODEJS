const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB connected')
  }).catch((e) => {
    console.log(e)
  })
}

module.exports = connect