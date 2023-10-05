const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Items = sequelize.define("items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  count: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

const Category = sequelize.define("categories", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  images: {
    type: DataTypes.JSON,
    allowNull: true,
    index: {
      name: "images_index",
      using: "gin",
      operator: "jsonb_path_ops",
    },
  },
});

const Characteristics = sequelize.define("characteristics", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
  value: { type: DataTypes.STRING, allowNull: true },
});

const TableCharacteristics = sequelize.define("tableCharacteristics", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
  value: { type: DataTypes.STRING, allowNull: true },
});

const Reporting = sequelize.define("reporting", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const ReportingLinks = sequelize.define("reportingLinks", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  src: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Galery = sequelize.define("galery", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const News = sequelize.define("news", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  smallDescription: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const DirectorContacts = sequelize.define("directorContacts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  job: { type: DataTypes.STRING, allowNull: false },
  internalPhone: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

const MarketingContacts = sequelize.define("marketingContacts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  job: { type: DataTypes.STRING, allowNull: false },
  internalPhone: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

const DirectorPhotoContacts = sequelize.define("directorPhotoContacts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  job: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

Items.hasMany(Category, { as: "categories" });
Category.belongsTo(Items);

Category.hasMany(Characteristics, { as: "characteristics" });
Characteristics.belongsTo(Category);

Category.hasMany(TableCharacteristics, { as: "tableCharacteristics" });
TableCharacteristics.belongsTo(Category);

Reporting.hasMany(ReportingLinks, { as: "reportingLinks" });
ReportingLinks.belongsTo(Reporting);

module.exports = {
  Items,
  Category,
  Characteristics,
  Reporting,
  ReportingLinks,
  Galery,
  News,
  DirectorContacts,
  MarketingContacts,
  DirectorPhotoContacts,
  TableCharacteristics,
};
