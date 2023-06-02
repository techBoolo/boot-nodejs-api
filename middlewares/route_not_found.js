import ErrorResponse from '../utils/error_response.js'

export default (req, res, next) => {
  const error = new ErrorResponse({ 
    statusCode: 404, 
    message: 'Route not found' 
  })
  next(error)
}
