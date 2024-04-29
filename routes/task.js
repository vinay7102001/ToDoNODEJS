const express = require('express')
const Authentication = require('../middleware/auth.js')
const { addTask, updateTask, deleteTask, showTasks } = require('../controller/task.js')

const routes = express.Router()

routes.get('/api/v1/tasks', Authentication, showTasks)

routes.post('/api/v1/addtask', Authentication, addTask)

routes.put('/api/v1/updatetask/:id', Authentication, updateTask)

routes.delete('/api/v1/deletetask/:id', Authentication, deleteTask)

module.exports = routes