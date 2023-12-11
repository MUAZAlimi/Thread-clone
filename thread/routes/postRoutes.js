const express = require("express");
const {
  createPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getFeedPost,
  getUserPost,
} = require("../contollers/postController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.get("/feed", protectRoute, getFeedPost);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", replyToPost);
router.get("/user/:username", getUserPost);

module.exports = router;
