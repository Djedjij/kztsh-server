const { Galery } = require("../models/models");
const ApiError = require("../error/ApiError");

class GaleryController {
  async getAll(req, res) {
    const galery = await Galery.findAll();
    return res.json(galery);
  }
  async create(req, res) {
    const { name, img } = req.body;
    const galery = await Galery.create({
      name,
      img,
    });
    return res.json(galery);
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const galery = await Galery.findByPk(id);

      if (!galery) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await galery.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new GaleryController();
