const express = require("express");
const { categoryControllers } = require("../../controllers");

const getCategoryRoutes = express.Router();

getCategoryRoutes.get("/", categoryControllers.fetchAllCategories);
getCategoryRoutes.get("/:id", categoryControllers.fetchCategoryById);
getCategoryRoutes.get("/name", categoryControllers.fetchCategoryByName);

module.exports = {
  getCategoryRoutes,
};
