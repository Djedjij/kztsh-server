const Router = require("express");
const router = new Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", authController.login);
// router.post("/registration", authController.registration);
router.get("/checkToken", authMiddleware, authController.checkToken);
module.exports = router;
