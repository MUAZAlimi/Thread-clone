const express = require('express');
const { createPost, getPost, deletePost } = require('../contollers/postController');
const protectRoute = require("../middleware/protectRoute");

const router = express.Router()

router.get("/:id", getPost)
router.post("/create", protectRoute, createPost)
router.delete("/:id", deletePost)

module.exports = router