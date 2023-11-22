const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const newsController = require("../controllers/newsController");
router.post("/", verifyToken, newsController.create);
router.get("/", newsController.getAll);
router.get("/:id", newsController.getOne);
router.delete("/:id", verifyToken, newsController.delete);

module.exports = router;
