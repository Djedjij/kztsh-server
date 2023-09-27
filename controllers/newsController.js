const { News } = require("../models/models");
const ApiError = require("../error/ApiError");
class NewsController {
  async getAll(req, res) {
    const news = await News.findAll();
    return res.json(news);
  }
  async getOne(req, res) {}
  async create(req, res) {
    const { name, description, smallDescription, date } = req.body;
    const { img } = req.files;
    const news = await News.create({
      name,
      description,
      smallDescription,
      date,
    });
    return res.json(news);
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const news = await News.findByPk(id);

      if (!news) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await news.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new NewsController();
