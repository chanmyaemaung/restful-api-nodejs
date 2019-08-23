const mongoose = require('mongoose')

// Post Schema
const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true
    },
    slug: {
      type: String,
      trim: true
    },
    image: {
      type: String,
      require: true,
      trim: true
    },
    content: {
      type: String,
      require: true,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

// export Model
module.exports = mongoose.model('Post', PostSchema)
