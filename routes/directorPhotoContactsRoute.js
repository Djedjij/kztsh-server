const Router = require("express");
const router = new Router();

const DirectorPhotoContactsController = require("../controllers/directorPhotoContactsController");
router.post("/", DirectorPhotoContactsController.create);
router.get("/", DirectorPhotoContactsController.getAll);
router.delete("/:id", DirectorPhotoContactsController.delete);

module.exports = router;
