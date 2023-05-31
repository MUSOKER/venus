const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const assignmentRoutes = require('./assignment.routes');
const assignmentFeedBackRoute = require('./assignment.feedback.routes');
const courseAssignmentRoutes = require('./course.assignments.routes');

const apiRoutes = express.Router();
apiRoutes.use('/user', userRoutes);
apiRoutes.use('/assignments', assignmentRoutes);
apiRoutes.use('/assignment_feedback', assignmentFeedBackRoute);
apiRoutes.use('/course_assignments', courseAssignmentRoutes);
apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;
