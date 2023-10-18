const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { News } = require("../models/models");
class NewsController {
  async getAll(req, res) {
    const news = await News.findAll();
    return res.json(news);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const news = await News.findOne({ where: { id } });
    return res.json(news);
  }
  async create(req, res, next) {
    try {
      const { name, description, smallDescription, date } = req.body;
      const { img } = req.files;
      console.log(req.files);
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const news = await News.create({
        name,
        description,
        smallDescription,
        img: fileName,
        date,
      });
      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const news = await News.findByPk(id);

      if (!news) {
        return res.status(404).json({ error: "Не найдено" });
      }
      const fileName = news.img;
      const filePath = path.resolve(__dirname, "..", "static", fileName);
      fs.unlinkSync(filePath);
      await news.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new NewsController();
