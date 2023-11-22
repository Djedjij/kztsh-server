const Router = require("express");
const router = new Router();
const CategoryController = require("../controllers/categoryController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/:itemId", verifyToken, CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.delete("/:id", verifyToken, CategoryController.delete);
router.post(
  "/addCharacteristics/:categoryId",
  verifyToken,
  CategoryController.createCharacteristics
);
router.delete(
  "/deleteCharacteristics/:characteristicsId",
  verifyToken,
  CategoryController.deleteCharacteristics
);
router.post(
  "/addTableCharacteristics/:categoryId",
  verifyToken,
  CategoryController.createTableCharacteristics
);
router.delete(
  "/deleteTableCharacteristics/:tableCharacteristicsId",
  verifyToken,
  CategoryController.deleteTableCharacteristics
);

router.post(
  "/addTableNameCharacteristics/:categoryId",
  verifyToken,
  CategoryController.createTableNameCharacteristics
);
router.delete(
  "/deleteTableNameCharacteristics/:tableCharacteristicsId",
  verifyToken,
  CategoryController.deleteTableNameCharacteristics
);
module.exports = router;
