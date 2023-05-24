const express = require('express');
const { categoryControllers } = require('../../controllers');

const deleteCategoryRoutes = express.Router();
deleteCategoryRoutes.delete(
  '/delete_category',
  categoryControllers.deleteCategoryById,
);

module.exports = {
  deleteCategoryRoutes,
};
