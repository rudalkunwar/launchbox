const User = require("../models/User");
const bcrypt = require("bcrypt");
const user_register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ errors });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const user_login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "You don't have account please register." });
    }
    const isValidUser = await bcrypt.compare(password, user.password);
    if (!isValidUser) {
      return res
        .status(422)
        .json({ message: "Email or password doesnot match." });
    }
    return res.status(200).json({ message: "Login Sucessfull" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { user_register, user_login };
