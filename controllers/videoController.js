const { Video } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class VideoController {
  async getAll(req, res) {
    const video = await Video.findAll();
    return res.json(video);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const video = await Video.findOne({ where: { id } });
    return res.json(video);
  }
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const { url } = req.files;
      const folderName = "videos";
      let fileName = uuid.v4() + ".mp4";
      url.mv(path.resolve(__dirname, "..", "static", folderName, fileName));
      const video = await Video.create({
        name,
        url: fileName,
      });
      return res.json(video);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const video = await Video.findByPk(id);
      if (!video) {
        return res.status(404).json({ error: "Не найдено" });
      }

      const fileName = video.url;
      const filePath = path.resolve(
        __dirname,
        "..",
        "static",
        "videos",
        fileName
      );
      fs.unlinkSync(filePath);
      await video.destroy();
      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new VideoController();
