/* eslint-disable import/extensions */
const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const postInternshipRoutes = require('./post.internship.routes');

const internshipRoutes = express.Router();
internshipRoutes.use(internshipRoutes);
internshipRoutes.use(postInternshipRoutes);

internshipRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = internshipRoutes;
