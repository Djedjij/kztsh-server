const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Токен не предоставлен" });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          auth: false,
          message: "Не валидный токен",
        });
      }
      req.user = decoded;
      next();
    });
  } catch (e) {
    res.status(401).json({ message: "Ошибка в запросе", error: e.toString() });
  }
};
