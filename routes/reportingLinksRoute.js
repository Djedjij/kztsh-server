const Router = require("express");
const router = new Router();

const ReportingLinksController = require("../controllers/reportingLinksController");
router.post("/", ReportingLinksController.create);
router.get("/", ReportingLinksController.getAll);
router.delete("/", ReportingLinksController.delete);

module.exports = router;
