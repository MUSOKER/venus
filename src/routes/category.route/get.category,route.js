const express = require('express');
const { categoryControllers } = require('../../controllers');

const getCategoryRoutes = express.Router();

getCategoryRoutes.get('/all_categories', categoryControllers.getAllCategories);
getCategoryRoutes.get(
  '/category/category_id',
  categoryControllers.getCategoryById,
);
getCategoryRoutes.get(
  '/category/category_name',
  categoryControllers.getCategoryByName,
);

module.exports = {
  getCategoryRoutes,
};
