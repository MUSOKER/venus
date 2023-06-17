const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const uploadRoutes = require('./upload.routes');

const uploadsRoutes = express.Router();

uploadsRoutes.use(uploadRoutes);

uploadsRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = uploadsRoutes;
