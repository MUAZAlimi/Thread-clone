const express = require("express");
const {
  signUPUser,
  loginUser,
  logoutUser,
  followUnFollowUser,
} = require("../contollers/userController");
const protectRoute = require("../middleware/protectRoute")

const router = express.Router();

router.post("/signup", signUPUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);

module.exports = router;
