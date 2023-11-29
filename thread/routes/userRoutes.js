const express = require("express");
const {
  signUPUser,
  loginUser,
  logoutUser,
  followUser,
} = require("../contollers/userController");

const router = express.Router();

router.post("/signup", signUPUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", followUser);

module.exports = router;
