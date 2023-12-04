const express = require('express');
const { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getFeedPost } = require('../contollers/postController');
const protectRoute = require("../middleware/protectRoute");

const router = express.Router()

router.get("/feed", protectRoute, getFeedPost)
router.get("/:id", getPost)
router.post("/create", protectRoute, createPost)
router.delete("/:id", protectRoute, deletePost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/reply/:id",  replyToPost)

module.exports = router