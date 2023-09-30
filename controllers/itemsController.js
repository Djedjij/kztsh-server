const ApiError = require("../error/ApiError");
const { Items, Category } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
class ItemsController {
  async getAll(req, res) {
    const items = await Items.findAll();
    return res.json(items);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const items = await Items.findOne({
      where: { id },
      include: [{ model: Category, as: "categories" }],
    });
    return res.json(items);
  }

  async create(req, res, next) {
    try {
      let { title, count, categories } = req.body;
      const { image } = req.files;

      let fileName = uuid.v4() + ".jpg";
      image.mv(
        path.resolve(__dirname, "..", "static", "itemsImages", fileName)
      );
      const items = await Items.create({
        title,
        count,
        image: fileName,
        categories,
      });
      if (categories) {
        categories.forEach((i) =>
          categories.create({
            name: i.name,
            src: i.src,
            itemsId: items.id,
          })
        );
      }
      return res.json(items);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const items = await Items.findByPk(id);
      if (!items) {
        return res.status(404).json({ error: "Не найдено" });
      }
      await items.destroy();
      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ItemsController();
