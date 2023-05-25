const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');

const internshipRoutes = express.Router();
internshipRoutes.use(internshipRoutes);

internshipRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = internshipRoutes;
