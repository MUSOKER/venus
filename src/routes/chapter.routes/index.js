const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const chapterRoutes = require('./chapter.routes');

const chapterRoutes = express.Router();

chapterRoutes.use(courseRoutes);

chapterRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = chapterRoutes;