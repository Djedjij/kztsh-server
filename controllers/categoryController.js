const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class CategoryController {
  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const categories = await Category.findOne({
      where: { id },
      include: [{ model: Category, as: "characteristics" }],
    });
    return res.json(categories);
  }

  async create(req, res, next) {
    try {
      const { name, description, tableCharacteristics } = req.body;
      const { images } = req.files;

      const imagesArr = images.map(async (img) => {
        let fileName = uuid.v4() + ".jpg";
        await img.mv(
          path.resolve(__dirname, "..", "static", "itemsImages", fileName)
        );
      });
      const imagesNames = await Promise.all(imagesArr);

      if (tableCharacteristics) {
        const tableCharacteristicsArr = tableCharacteristics.map((char) => ({
          name: char.name,
          value: char.value,
          characteristicsId: categories.id,
        }));
      } else {
        return null;
      }
      const categories = await Category.create({
        name,
        description,
        images: imagesNames,
        tableCharacteristics: tableCharacteristicsArr,
      });
      return res.json(categories);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const categories = await Category.findByPk(id);
      if (!categories) {
        return res.status(404).json({ error: "Не найдено" });
      }
      await categories.destroy();
      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CategoryController();
