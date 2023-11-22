const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const GaleryController = require("../controllers/galeryController");
router.post("/", verifyToken, GaleryController.create);
router.get("/", GaleryController.getAll);
router.get("/:id", GaleryController.getOne);
router.delete("/:id", verifyToken, GaleryController.delete);

module.exports = router;
