const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
<<<<<<< HEAD
const categoryRoutes = require('./category.route.js');
=======
const projectsRoutes = require('./project.routes');
const coursesRoutes = require('./course.routes');
>>>>>>> 70b7eb8a08baf5052f17130e13cb9562da258188

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
<<<<<<< HEAD
apiRoutes.use('/category', categoryRoutes);
=======
apiRoutes.use('/project', projectsRoutes);
apiRoutes.use('/course', coursesRoutes);
>>>>>>> 70b7eb8a08baf5052f17130e13cb9562da258188

apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;
