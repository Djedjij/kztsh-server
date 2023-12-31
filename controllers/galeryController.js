const { Galery } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class GaleryController {
  async getAll(req, res) {
    const galery = await Galery.findAll();
    return res.json(galery);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const galery = await Galery.findOne({ where: { id } });
    return res.json(galery);
  }
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const { img } = req.files;
      const folderName = "galeryImg";
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", folderName, fileName));
      const galery = await Galery.create({
        name,
        img: fileName,
      });
      return res.json(galery);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const galery = await Galery.findByPk(id);

      if (!galery) {
        return res.status(404).json({ error: "Не найдено" });
      }
      const fileName = galery.img;
      const filePath = path.resolve(
        __dirname,
        "..",
        "static",
        "galeryImg",
        fileName
      );
      fs.unlinkSync(filePath);

      await galery.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new GaleryController();
