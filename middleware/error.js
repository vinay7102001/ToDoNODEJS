

const errorHandler = (err, req, res, next) => {
  console.log(err)
  res.json({
    success: false,
    massage: err.message
  })
}

module.exports = errorHandler