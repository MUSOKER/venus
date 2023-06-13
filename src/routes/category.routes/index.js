const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const { getCategoryRoutes } = require('./get.category.route');
const { deleteCategoryRoutes } = require('./delete.category.route');
const { createCategoryRoutes } = require('./create.category.route');

const categoryRoutes = express.Router();

categoryRoutes.use(getCategoryRoutes);
categoryRoutes.use(deleteCategoryRoutes);
categoryRoutes.use(createCategoryRoutes);
categoryRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = categoryRoutes;
