const express = require('express')
const Authenticate = require('../middleware/auth.js')

const { registerNewUser, login, Profile, logout } = require('../controller/user.js')

const routes = express.Router()

// routes.post('/api/v1/login', login)

routes.post('/api/v1/new', registerNewUser)

routes.post('/api/v1/login', login)

routes.get('/api/v1/profile', Authenticate, Profile)

routes.get('/api/v1/logout', Authenticate, logout)

module.exports = routes