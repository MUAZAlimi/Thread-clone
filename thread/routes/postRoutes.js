const express = require('express');
const { createPost } = require('../contollers/postController');
const protectRoute = require("../middleware/protectRoute");

const router = express.Router()

router.get("/", getPost)
router.post("/create", protectRoute, createPost)

module.exports = router