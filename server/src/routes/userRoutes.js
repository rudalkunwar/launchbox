const express = require("express");
const { user_register } = require("../controllers/userController");
const router = express.Router();


router.get("/register", user_register);

module.exports = router;
