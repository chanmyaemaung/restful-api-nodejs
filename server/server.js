const express = require('express')
const connectDB = require('../config/db')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const app = express()
const log = console.log

// Connect Dtabase
connectDB()

// Initial Middleware
app.use(cors())
app.use(express.json({ extended: false }))

// Define Routes
app.use('/posts', require('../routes/posts'))
app.use('/specific', require('../routes/posts'))

// Start Server
app.listen(PORT, () => log(`Server started on port ${PORT}`))
