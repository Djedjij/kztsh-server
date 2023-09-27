const ApiError = require("../error/ApiError");
const { DirectorPhotoContacts } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
class DirectorPhotoContactsController {
  async getAll(req, res) {
    const directorPhotoContacts = await DirectorPhotoContacts.findAll();
    return res.json(directorPhotoContacts);
  }
  async create(req, res, next) {
    try {
      const { name, job } = req.body;
      const { image } = req.files;
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));
      const directorPhotoContacts = await DirectorPhotoContacts.create({
        name,
        job,
        image: fileName,
      });
      return res.json(directorPhotoContacts);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const directorPhotoContacts = await DirectorPhotoContacts.findByPk(id);

      if (!directorPhotoContacts) {
        return res.status(404).json({ error: "Не найдено" });
      }

      const fileName = directorPhotoContacts.image;
      const filePath = path.resolve(__dirname, "..", "static", fileName);
      fs.unlinkSync(filePath);

      await directorPhotoContacts.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new DirectorPhotoContactsController();
