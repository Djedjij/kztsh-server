const ApiError = require("../error/ApiError");
const { Reporting, ReportingLinks } = require("../models/models");

class ReportingController {
  async getAll(req, res) {
    const reporting = await Reporting.findAll();
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
        reportingLinks
      });
      if (reportingLinks) {
        // reportingLinks = JSON.parse(reportingLinks);
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
    }catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReportingController();
