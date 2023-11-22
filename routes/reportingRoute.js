const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const ReportingController = require("../controllers/reportingController");
router.post("/", verifyToken, ReportingController.create);
router.get("/", ReportingController.getAll);
router.get("/:id", ReportingController.getOne);
router.delete("/:id", verifyToken, ReportingController.delete);
router.post(
  "/addLink/:reportingId",
  verifyToken,
  ReportingController.createReportingLink
);
router.delete(
  "/deleteLink/:linkId",
  verifyToken,
  ReportingController.deleteReportingLink
);

module.exports = router;
