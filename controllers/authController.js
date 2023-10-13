const ApiError = require("../error/ApiError");
const User = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class authController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ id: user._id }, "your_secret_key", {
        expiresIn: "1h",
      });
      return res.json({
        message: "Login successful",
        token,
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getUsers(req, res, next) {
    try {
      return res.json("server work");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new authController();
