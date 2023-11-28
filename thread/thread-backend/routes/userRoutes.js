const express = require("express");
const { signUPUser } = require("../contollers/userController");

const router = express.Router();

router.post("/signup", signUPUser);

module.exports = router;
