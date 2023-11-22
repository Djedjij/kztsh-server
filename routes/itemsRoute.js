const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const itemsController = require("../controllers/itemsController");
router.post("/", verifyToken, itemsController.create);
router.get("/", itemsController.getAll);
router.get("/:id", itemsController.getOne);
router.delete("/:id", verifyToken, itemsController.delete);

module.exports = router;
