const ApiError = require("../error/ApiError");
const { DirectorContacts } = require("../models/models");
class DirectorContactsController {
  async getAll(req, res) {
    const directorContacts = await DirectorContacts.findAll();
    return res.json(directorContacts);
  }
  async create(req, res, next) {
    try {
      const { name, job, internalPhone, phone } = req.body;

      const directorContacts = await DirectorContacts.create({
        name,
        job,
        internalPhone,
        phone,
      });
      return res.json(directorContacts);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const directorContacts = await DirectorContacts.findByPk(id);

      if (!directorContacts) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await directorContacts.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

module.exports = new DirectorContactsController();
