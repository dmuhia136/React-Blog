const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post")

postRouter.post('/', postController.createPost)
postRouter.get('/', postController.fetchPosts)

module.exports = postRouter