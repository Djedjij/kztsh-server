const Router = require("express");
const router = new Router();
const CategoryController = require("../controllers/categoryController");
router.post("/:itemId", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.delete("/:id", CategoryController.delete);
router.post(
  "/addCharacteristics/:categoryId",
  CategoryController.createCharacteristics
);
router.delete(
  "/deleteCharacteristics/:characteristicsId",
  CategoryController.deleteCharacteristics
);
router.post(
  "/addTableCharacteristics/:categoryId",
  CategoryController.createTableCharacteristics
);
router.delete(
  "/deleteTableCharacteristics/:tableCharacteristicsId",
  CategoryController.deleteTableCharacteristics
);
module.exports = router;
