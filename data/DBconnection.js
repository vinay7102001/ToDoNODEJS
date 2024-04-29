const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect(process.env.MONGO_URI).then((c) => {
    console.log(`DB connected with ${c.connection.host}`)
  }).catch((e) => {
    console.log(e)
  })
}

module.exports = connect