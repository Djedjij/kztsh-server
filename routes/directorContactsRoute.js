const Router = require("express");
const router = new Router();
const verifyToken = require("../middleware/authMiddleware");

const DirectorContactsController = require("../controllers/directorContactsController");
router.post("/", verifyToken, DirectorContactsController.create);
router.get("/", DirectorContactsController.getAll);
router.get("/:id", DirectorContactsController.getOne);
router.delete("/:id", verifyToken, DirectorContactsController.delete);

module.exports = router;
