const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const projectRoutes = require('./project.routes.js');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/project', projectRoutes);

apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;