
require('dotenv').config()
const { dbConnect } = require("./utils/db.js")
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

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
dbConnect()
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})