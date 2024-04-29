const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.js')
const taskRoutes = require('./routes/task.js')
const connect = require('./data/DBconnection.js')
const { config } = require('dotenv')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/error.js')
const cors = require('cors')

const app = express()

config({
  path: "./data/config.env"
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(userRoutes)
app.use(taskRoutes)


connect()

app.get('/', (req, res) => {
  res.send('working')
})

app.listen(process.env.PORT, () => {
  console.log(`server is working on port:${process.env.PORT} `)
})

app.use(errorHandler)