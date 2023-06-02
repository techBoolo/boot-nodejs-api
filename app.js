import express from 'express'
import routeNotFound from './middlewares/route_not_found.js'
import errorHandler from './middlewares/error_handler.js'
import { getDB } from './config/db.js'

const app = express()

app.get('/', async (req, res) => {
  const User = getDB().collection('users')
  const cursor = User.find()
  const users = await cursor.toArray()
  res.status(200).json({ users,  message: 'it works' })
})

app.use(routeNotFound)
app.use(errorHandler)
export default app
