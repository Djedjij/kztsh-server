const Router = require("express");
const router = new Router();
const itemsRoute = require("./itemsRoute");
const categoryRoute = require("./categoryRoute");
const reportingRoute = require("./reportingRoute");
const galeryRoute = require("./galeryRoute");
const newsRoute = require("./newsRoute");
const directorContactsRoute = require("./directorContactsRoute");
const marketingContactsRoute = require("./marketingContactsRoute");
const directorPhotoContactsRoute = require("./directorPhotoContactsRoute");
const authRoute = require("./authRoute");
const videoRoute = require("./videoRoute");

router.use("/auth", authRoute);
router.use("/items", itemsRoute);
router.use("/category", categoryRoute);
router.use("/reporting", reportingRoute);
router.use("/galery", galeryRoute);
router.use("/news", newsRoute);
router.use("/marketingContacts", marketingContactsRoute);
router.use("/directorContacts", directorContactsRoute);
router.use("/directorPhotoContacts", directorPhotoContactsRoute);
router.use("/video", videoRoute);

module.exports = router;
