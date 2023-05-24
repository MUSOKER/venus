const express = require('express');
const { categoryControllers } = require('../../controllers');

const getCategoryRoutes = express.Router();

getCategoryRoutes.get(
  '/all_categories',
  categoryControllers.fetchAllCategories,
);
getCategoryRoutes.get(
  '/category/category_id',
  categoryControllers.fetchCategoryById,
);
getCategoryRoutes.get(
  '/category/category_name',
  categoryControllers.fetchCategoryByName,
);

module.exports = {
  getCategoryRoutes,
};
