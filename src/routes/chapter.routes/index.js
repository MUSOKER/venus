const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const chapterRoutes = require('./chapter.routes');

const chaptersRoutes = express.Router();

chaptersRoutes.use(chapterRoutes);

chaptersRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = chaptersRoutes;