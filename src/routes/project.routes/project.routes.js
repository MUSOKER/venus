const express = require('express');

const { projectControllers } = require('../../controllers');

const projectRoutes = express.Router();

projectRoutes.post('/add', projectControllers.addProject);

projectRoutes.put('/:projectId', projectControllers.updateProject);

module.exports = projectRoutes;
