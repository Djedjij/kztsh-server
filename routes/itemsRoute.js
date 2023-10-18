const Router = require("express");
const router = new Router();

const itemsController = require("../controllers/itemsController");
router.post("/", itemsController.create);
router.get("/", itemsController.getAll);
router.get("/:id", itemsController.getOne);
router.delete("/:id", itemsController.delete);

module.exports = router;
