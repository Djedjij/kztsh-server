const Router = require("express");
const router = new Router();

const MarketingContactsController = require("../controllers/marketingContactsController");
router.post("/", MarketingContactsController.create);
router.get("/", MarketingContactsController.getAll);
router.delete("/:id", MarketingContactsController.delete);

module.exports = router;
