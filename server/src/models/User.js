const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "The password should have a minimum of 6 characters"],
  },
});

// Create the user model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
