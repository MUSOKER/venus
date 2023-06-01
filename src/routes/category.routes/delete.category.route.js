const express = require("express");
const { categoryControllers } = require("../../controllers");

const deleteCategoryRoutes = express.Router();
deleteCategoryRoutes.delete("/:categoryId", categoryControllers.deleteCategoryById);

module.exports = {
  deleteCategoryRoutes,
};
