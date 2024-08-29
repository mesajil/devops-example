const express = require('express')
const app = express()

// Routes

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Server

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = { app, server }
