import http from 'node:http'

const server = http.createServer()
const PORT = process.env.PORT || 3001

server.on('request', (req, res) => {
  res.end('request handled')
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
