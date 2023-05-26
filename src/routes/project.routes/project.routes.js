const express = require('express');

const { projectControllers } = require('../../controllers');

const projectRoutes = express.Router();

projectRoutes.post('/add', projectControllers.addProject);
projectRoutes.put('/:projectId', projectControllers.updateProject);
projectRoutes.get('/allProjects', projectControllers.fetchAllProjects);
projectRoutes.get('/project', projectControllers.filterProject);
projectRoutes.delete('/delete/:projectId', projectControllers.deleteProjectById);

module.exports = projectRoutes;