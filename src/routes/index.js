const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const internshipRoutes = require('./internship.routes/index');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/internship', internshipRoutes);

apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;
