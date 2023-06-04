const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const chapterRoutes = require('./chapter.routes');

const chapterRoute = express.Router();

chapterRoute.use(chapterRoutes);

chapterRoute.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = chapterRoute;
