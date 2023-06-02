import express from 'express'
import routeNotFound from './middlewares/route_not_found.js'
import errorHandler from './middlewares/error_handler.js'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'it works' })
})

app.use(routeNotFound)
app.use(errorHandler)
export default app
