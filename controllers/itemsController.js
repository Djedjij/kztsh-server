const ApiError = require("../error/ApiError");
class ItemsController {
  async getAll(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
  async getId(req, res) {}
  async create(req, res) {}
  async delete(req, res) {}
}

module.exports = new ItemsController();
