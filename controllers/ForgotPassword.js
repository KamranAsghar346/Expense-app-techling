const User = require("../models/User");

const forgotPassword = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).send("Name and new password are required");
    }

    if (password.length < 6) {
      return res.status(400).send("Password must be at least 6 characters");
    }

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).send("User is not Found");
    }

    user.password = password;
    user.tokens = [];
    await user.save();

    res.send("Password updated successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = forgotPassword;
