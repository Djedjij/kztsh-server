const Router = require("express");
const router = new Router();

const GaleryController = require("../controllers/galeryController");
router.post("/", GaleryController.create);
router.get("/", GaleryController.getAll);
router.delete("/:id", GaleryController.delete);

module.exports = router;
