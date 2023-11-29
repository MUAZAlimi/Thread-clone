const express = require("express");
const { signUPUser , loginUser, logoutUser } = require("../contollers/userController");
 
const router = express.Router();

router.post("/signup", signUPUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
