const Router = require("express");
const router = new Router();

const ReportingController = require("../controllers/reportingController");
router.post("/", ReportingController.create);
router.get("/", ReportingController.getAll);
router.get("/:id", ReportingController.getId);
router.delete("/", ReportingController.delete);

module.exports = router;
