const ApiError = require("../error/ApiError");
const bcrypt = require("bcryptjs");
const User = require("../models/models");

class authController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getUsers(req, res) {
    try {
      return res.json("server work");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new authController();
