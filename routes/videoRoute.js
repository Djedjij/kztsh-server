const Router = require("express");
const router = new Router();
const VideoController = require("../controllers/videoController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, VideoController.create);
router.get("/", VideoController.getAll);
router.get("/:id", VideoController.getOne);
router.delete("/:id", verifyToken, VideoController.delete);

module.exports = router;
