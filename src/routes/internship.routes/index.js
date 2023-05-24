const express = require('express');

const { error } = require('@Enseedling/enseedling-lib-handler');
const { applyInternshipRoutes } = require('./applied_internship.routes');

const internshipRoutes = express.Router();

internshipRoutes.use(applyInternshipRoutes);

internshipRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = internshipRoutes;