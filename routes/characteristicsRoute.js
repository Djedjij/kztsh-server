const Router = require("express");
const router = new Router();

const CharacteristicsController = require("../controllers/characteristicsController");
router.post("/", CharacteristicsController.create);
router.get("/", CharacteristicsController.getAll);
router.delete("/", CharacteristicsController.delete);

module.exports = router;
