const express = require('express');

const { internshipControllers } = require('../../controllers');

const internshipRoutes = express.Router();

internshipRoutes.post('/applyinternship', internshipControllers.applyInternship);

internshipRoutes.delete('/delete', internshipControllers.deleteInternship);

module.exports = internshipRoutes;
