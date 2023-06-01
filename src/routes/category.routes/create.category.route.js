const express = require("express");
const { categoryControllers } = require("../../controllers");

const createCategoryRoutes = express.Router();

createCategoryRoutes.post("/create", categoryControllers.createCategory);

module.exports = { createCategoryRoutes };
