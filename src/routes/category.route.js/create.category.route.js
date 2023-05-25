const express = require('express');
const { categoryControllers } = require('../../controllers');

const createCategoryRoutes = express.Router();

createCategoryRoutes.post(
  '/category/create_category',
  categoryControllers.createCategory,
);

module.exports = {
  createCategoryRoutes,
};
