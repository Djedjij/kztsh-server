require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("../kztsh-server/models/models");
const cors = require("cors");
const router = require("./routes/index.js");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.static(path.resolve(__dirname, "static", "documents")));
app.use(express.static(path.resolve(__dirname, "static", "itemsImages")));
app.use(express.static(path.resolve(__dirname, "static", "newsImg")));
app.use(express.static(path.resolve(__dirname, "static", "galeryImg")));
app.use(express.static(path.resolve(__dirname, "static", "directorPhotoImg")));

app.use(express.static(path.resolve(__dirname, "static", "videos")));

app.use(fileUpload({}));
app.use("/api", router);

// errorHandler должен быть в самом конце app.use
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
