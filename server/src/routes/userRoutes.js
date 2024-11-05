const express = require("express");
const { user_register } = require("../controllers/userController");
const router = express.Router();


router.post("/register", user_register);

module.exports = router;
