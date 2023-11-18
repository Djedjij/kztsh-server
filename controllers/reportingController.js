const ApiError = require("../error/ApiError");
const { Reporting, ReportingLinks } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class ReportingController {
  async getAll(req, res) {
    const reporting = await Reporting.findAll({
      include: [{ model: ReportingLinks, as: "reportingLinks" }],
    });
    return res.json(reporting);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const reporting = await Reporting.findOne({
      where: { id },
      include: [{ model: ReportingLinks, as: "reportingLinks" }],
    });
    return res.json(reporting);
  }
  async create(req, res, next) {
    try {
      let { name, reportingLinks } = req.body;
      const reporting = await Reporting.create({
        name,
        reportingLinks,
      });
      if (reportingLinks) {
        reportingLinks.forEach((i) =>
          ReportingLinks.create({
            name: i.name,
            src: i.src,
            reportingId: reporting.id,
          })
        );
      }

      return res.json(reporting);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const reporting = await Reporting.findByPk(id);
      if (!reporting) {
        return res.status(404).json({ error: "Не найдено" });
      }
      await reporting.destroy();
      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async createReportingLink(req, res, next) {
    const reportingId = req.params.reportingId;

    const newReportingLinks = req.body;

    try {
      const reporting = await Reporting.findByPk(reportingId);
      if (!reporting) {
        return res.status(404).json({ error: "Не найдено" });
      }

      if (newReportingLinks) {
        let { name } = req.body;
        const { src } = req.files;
        const folderName = "documents";
        let fileName = uuid.v4() + ".pdf";
        src.mv(path.resolve(__dirname, "..", "static", folderName, fileName));
        await ReportingLinks.create({
          name,
          src: fileName,
          reportingId: reporting.id,
        });
      }
      return res.json(reporting);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteReportingLink(req, res, next) {
    try {
      const linkId = req.params.linkId;
      const reportingLink = await ReportingLinks.findByPk(linkId);
      if (!reportingLink) {
        return res.status(404).json({ error: "Не найдено" });
      }
      const fileName = reportingLink.src;
      const filePath = path.resolve(
        __dirname,
        "..",
        "static",
        "documents",
        fileName
      );
      fs.unlinkSync(filePath);
      await reportingLink.destroy();

      return res.status(204).send();
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReportingController();
