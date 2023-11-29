const ApiError = require("../error/ApiError");
const { MarketingContacts } = require("../models/models");
class MarketingContactsController {
  async getAll(req, res) {
    const marketingContacts = await MarketingContacts.findAll();
    return res.json(marketingContacts);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const marketingContacts = await MarketingContacts.findOne({
      where: { id },
    });
    return res.json(marketingContacts);
  }
  async create(req, res, next) {
    try {
      const { name, job, internalPhone, phone } = req.body;
      console.log(req.body);
      const marketingContacts = await MarketingContacts.create({
        name,
        job,
        internalPhone,
        phone,
      });
      return res.json(marketingContacts);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const marketingContacts = await MarketingContacts.findByPk(id);

      if (!marketingContacts) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await marketingContacts.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      return res.status(500).json({ error: "Ошибка при удалении" });
    }
  }
}

//
module.exports = new MarketingContactsController();
