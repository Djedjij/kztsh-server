const Router = require("express");
const router = new Router();

const DirectorContactsController = require("../controllers/directorContactsController");
router.post("/", DirectorContactsController.create);
router.get("/", DirectorContactsController.getAll);
router.delete("/:id", DirectorContactsController.delete);

module.exports = router;
