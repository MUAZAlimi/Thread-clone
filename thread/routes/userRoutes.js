const express = require("express");
const {
  getUserProfile,
  followUnFollowUser,
  signUPUser,
  loginUser,
  logoutUser,
  updateUser,
} = require("../contollers/userController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.post("/signup", signUPUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);

module.exports = router;
