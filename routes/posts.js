const express = require('express')
const router = express.Router()
// Call from Model
const Post = require('../models/Post')

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.json({ msg: error })
  }
})

// SUBMIT A POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (error) {
    res.json({ msg: error })
  }
})

// SPECIFIC POST
router.get('/:postID', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID)
    res.json(post)
  } catch (error) {
    res.json({ msg: error })
  }
})

// UPDATE A POST
router.patch('/:postID', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } } // this is specific object
    )
    res.json(updatedPost)
  } catch (error) {
    res.json({ msg: error })
  }
})

// DELETE POST
router.delete('/:postID', async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.postID })
    res.json(removePost)
  } catch (error) {
    res.json({ msg: error })
  }
})

module.exports = router
