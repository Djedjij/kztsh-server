const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccessToken = (id, name) => {
  const payload = { id, name };
  return jwt.sign(payload, secret, {
    expiresIn: "24h",
  });
};
class authController {
  async registration(req, res, next) {
    try {
      const { name, password } = req.body;
      const candidate = await User.findOne({ name });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = await User.create({ name, password: hashPassword });
      const token = generateAccessToken(user.id, user.name);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ where: { name } });

      if (!user) {
        throw new Error("Пользователь не найден");
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        throw new Error("Неверный пароль");
      }
      const token = generateAccessToken(user.id, user.name);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async checkToken(req, res, next) {
    const token = generateAccessToken(req.user.id, req.user.name);
    return res.json({ token });
  }
}

module.exports = new authController();
