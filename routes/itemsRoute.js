const Router = require("express");
const router = new Router();

router.post("/");
router.get("/", (req, res) => {
  res.json({ message: "items-working" });
});
router.get("/:id");
router.delete("/");

module.exports = router;
