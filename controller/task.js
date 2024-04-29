const Task = require('../model/task.js')

const addTask = async (req, res, next) => {
  try {
    const { title, description } = req.body

    if (title === '' && description === '') {
      return res.json({
        success: false,
        massage: 'plese fill all data'
      })
    }

    const user = req.user._id
    const task = await Task.create({ title, description, user })
    res.json({
      success: true,
      task
    })

  } catch (error) {
    next(error)
  }
}

const showTasks = async (req, res, next) => {
  try {
    const id = req.user._id

    const tasks = await Task.find({ user: id })

    res.json({
      success: true,
      tasks
    })
  } catch (error) {
    next(error)
  }

}

const updateTask = async (req, res, next) => {
  try {
    const _id = req.params.id
    const task = await Task.findOne({ _id })

    if (!task) {
      return next(new Error("task is not present"))
    }

    task.IsMarked = !task.IsMarked
    task.save()

    res.json({
      success: true,
      task
    })
  } catch (error) {
    next(error)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const _id = req.params.id
    const task = await Task.deleteOne({ _id })

    res.json({
      success: true,
      massage: 'task deleted successfuly',
      task
    })
  } catch (error) {
    next(error)
  }

}

module.exports = { addTask, updateTask, deleteTask, showTasks }