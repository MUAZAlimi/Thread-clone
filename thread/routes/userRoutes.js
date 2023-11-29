const express = require("express");
const { signUPUser , loginUser } = require("../contollers/userController");
 
const router = express.Router();

router.post("/signup", signUPUser);
router.post("/login", loginUser);

module.exports = router;
