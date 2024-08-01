
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))

app.use('/api',require('./routes/authRoutes.js'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})