const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const { getProjectRoutes } = require('./get.project.routes');
const { deleteProjectRoutes } = require('./delete.project.routes')
const projectRoutes = express.Router();

projectRoutes.use(getProjectRoutes);
projectRoutes.use(deleteProjectRoutes);
projectRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = {
    projectRoutes
}