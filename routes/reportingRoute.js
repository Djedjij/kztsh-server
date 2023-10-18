const Router = require("express");
const router = new Router();

const ReportingController = require("../controllers/reportingController");
router.post("/", ReportingController.create);
router.get("/", ReportingController.getAll);
router.get("/:id", ReportingController.getOne);
router.delete("/:id", ReportingController.delete);
router.post("/addLink/:reportingId", ReportingController.createReportingLink);
router.delete("/deleteLink/:linkId", ReportingController.deleteReportingLink);

module.exports = router;
