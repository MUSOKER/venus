const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const assignmentRoutes = require('./assignment.routes');
const feedbackRoutes = require('./feedback.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/assignments', assignmentRoutes);
apiRoutes.use('/feedback', feedbackRoutes);

apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;
