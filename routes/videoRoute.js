const Router = require("express");
const router = new Router();

const VideoController = require("../controllers/videoController");

router.post("/", VideoController.create);
router.get("/", VideoController.getAll);
router.get("/:id", VideoController.getOne);
router.delete("/:id", VideoController.delete);

module.exports = router;
