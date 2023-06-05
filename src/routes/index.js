const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const internshipRoutes = require('./internship.routes');

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/internship', internshipRoutes);

module.exports = apiRoutes;