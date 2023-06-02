import http from 'node:http'
import app from './app.js'
import connectDB from './config/db.js'

const server = http.createServer()
const PORT = process.env.PORT || 3001

server.on('request', app)

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  })
