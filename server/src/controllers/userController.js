const User = require("../models/User");
const user_register = async (req, res) => {
  try {
    const { name, email, password } = { ...req.body };
  } catch (error) {
    console.error(error);
  }
};

const user_login = async (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { user_register };
