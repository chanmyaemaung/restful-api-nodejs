const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
const log = console.log

// Connect Database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    log('MongoDB Connected...')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

// Export DB
module.exports = connectDB
