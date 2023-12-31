const ApiError = require("../error/ApiError");
const {
  Category,
  Characteristics,
  TableCharacteristics,
  TableNameCharacteristics,
} = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class CategoryController {
  async getAll(req, res) {
    const categories = await Category.findAll({
      include: [
        { model: Characteristics, as: "characteristics" },
        { model: TableCharacteristics, as: "tableCharacteristics" },
        { model: TableNameCharacteristics, as: "tableNameCharacteristics" },
      ],
    });
    return res.json(categories);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const categories = await Category.findOne({
      where: { id },
      include: [
        { model: Characteristics, as: "characteristics" },
        { model: TableCharacteristics, as: "tableCharacteristics" },
        { model: TableNameCharacteristics, as: "tableNameCharacteristics" },
      ],
    });
    return res.json(categories);
  }

  async create(req, res, next) {
    try {
      const {
        name,
        description,
        characteristics,
        tableCharacteristics,
        tableNameCharacteristics,
      } = req.body;
      const itemId = req.params.itemId;
      let { images } = req.files;

      if (!images) {
        return next(ApiError.badRequest("Изображения не найдены"));
      }
      // Если загружено только одно изображение, превращаем его в массив.
      if (!Array.isArray(images)) {
        images = [images];
      }

      const imagesArr = await Promise.all(
        images.map(async (img) => {
          let fileName = uuid.v4() + ".jpg";
          try {
            await img.mv(
              path.resolve(__dirname, "..", "static", "itemsImages", fileName)
            );
            return fileName;
          } catch (error) {
            throw new Error(`Failed to move image: ${error.message}`);
          }
        })
      );
      const categories = await Category.create({
        name,
        description,
        images: imagesArr,
        characteristics,
        tableCharacteristics,
        tableNameCharacteristics,
        itemId,
      });

      if (characteristics) {
        const characteristicsArr = JSON.parse(characteristics);
        console.log(characteristicsArr);
        await Promise.all(
          characteristicsArr.map(async (i) => {
            try {
              await Characteristics.create({
                name: i.name,
                value: i.value,
                categoryId: categories.id,
              });
            } catch (e) {
              next(ApiError.badRequest(e.message));
            }
          })
        );
      }

      return res.json(categories);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
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

  // characteristics functions
  async createCharacteristics(req, res, next) {
    const characteristicsId = req.params.categoryId;

    const newCharacteristics = req.body;

    try {
      const categories = await Category.findByPk(characteristicsId);
      if (!categories) {
        return res.status(404).json({ error: "Не найдено" });
      }

      if (newCharacteristics) {
        let { name, value } = req.body;

        await Characteristics.create({
          name,
          value,
          categoryId: categories.id,
        });
      }
      return res.json(categories);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteCharacteristics(req, res, next) {
    try {
      const characteristicsId = req.params.characteristicsId;
      const characteristics = await Characteristics.findByPk(characteristicsId);

      if (!characteristics) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await characteristics.destroy();

      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async createTableCharacteristics(req, res, next) {
    const characteristicsId = req.params.categoryId;

    const categories = await Category.findByPk(characteristicsId);
    if (!categories) {
      return res.status(404).json({ error: "Не найдено" });
    }
    if (req.body && Array.isArray(req.body)) {
      const names = req.body;
      console.log(names);
      try {
        await TableCharacteristics.create({
          name: names,
          categoryId: categories.id,
        });
        return res.json(categories);
      } catch (e) {
        return next(ApiError.badRequest(e.message));
      }
    }
    return res.status(400).json({ error: "Неправильный формат данных" });
  }

  async deleteTableCharacteristics(req, res, next) {
    try {
      const tableCharacteristicsId = req.params.tableCharacteristicsId;
      const tableCharacteristics = await TableCharacteristics.findByPk(
        tableCharacteristicsId
      );

      if (!tableCharacteristics) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await tableCharacteristics.destroy();

      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async createTableNameCharacteristics(req, res, next) {
    const characteristicsId = req.params.categoryId;
    const categories = await Category.findByPk(characteristicsId);
    if (!categories) {
      return res.status(404).json({ error: "Не найдено" });
    }
    if (req.body && Array.isArray(req.body)) {
      const names = req.body;
      try {
        await TableNameCharacteristics.create({
          name: names,
          categoryId: categories.id,
        });
        return res.json(categories);
      } catch (e) {
        return next(ApiError.badRequest(e.message));
      }
    }
    return res.status(400).json({ error: "Не правильный формат данных" });
  }

  async deleteTableNameCharacteristics(req, res, next) {
    try {
      const tableCharacteristicsId = req.params.tableCharacteristicsId;
      const tableCharacteristics = await TableNameCharacteristics.findByPk(
        tableCharacteristicsId
      );

      if (!tableCharacteristics) {
        return res.status(404).json({ error: "Не найдено" });
      }

      await tableCharacteristics.destroy();

      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CategoryController();
