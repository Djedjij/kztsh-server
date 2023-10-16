const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, {
    expiresIn: "1h",
  });
};
class authController {
  async registration(req, res, next) {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ name });
      if (user) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const candidate = await User.create({ name, password: hashPassword });
      await candidate.save();
      return res.json("пользователь зарегистрирован");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ name });
      if (name !== user.name) {
        throw new Error("Неверное имя пользователя");
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        throw new Error("Неверный пароль");
      }
      const token = generateAccessToken(user.id);
      return res.json({
        message: "Вход выполнен",
        token,
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async checkToken(req, res, next) {
    try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
        console.log(authorizationHeader);
        return res.status(401).json({ message: "No token provided" });
      }

      const token = authorizationHeader.split(" ")[1];
      if (!token) {
        console.log(authorizationHeader);
        return res.status(401).json({ message: "No token provided" });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET || secret);

      if (!decodedToken) {
        return res.status(401).json({ message: "Token is not valid" });
      }

      const { exp } = decodedToken;
      if (Date.now() >= exp * 1000) {
        // convert exp to milliseconds
        return res.status(401).json({ message: "Token is expired" });
      }

      req.user = decodedToken;
      next();
    } catch (e) {
      res.status(500);
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new authController();
