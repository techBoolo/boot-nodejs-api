export default (error, req, res, next) => {
  res.statusCode = error.statusCode || 500
  res.json({
    error: {
      name: error.name,
      message: error.message
    }
  })
}
