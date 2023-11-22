const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const MarketingContactsController = require("../controllers/marketingContactsController");
router.post("/", verifyToken, MarketingContactsController.create);
router.get("/", MarketingContactsController.getAll);
router.get("/:id", MarketingContactsController.getOne);
router.delete("/:id", verifyToken, MarketingContactsController.delete);

module.exports = router;
