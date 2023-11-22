const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const DirectorPhotoContactsController = require("../controllers/directorPhotoContactsController");
router.post("/", verifyToken, DirectorPhotoContactsController.create);
router.get("/", DirectorPhotoContactsController.getAll);
router.get("/:id", DirectorPhotoContactsController.getOne);
router.delete("/:id", verifyToken, DirectorPhotoContactsController.delete);

module.exports = router;
