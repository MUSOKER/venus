const express = require('express');
const { projectControllers } = require('../../controllers');

const getProjectRoutes = express.Router();

getProjectRoutes.get('/all_projects', projectControllers.fetchAllProjects);
getProjectRoutes.get('/project/with_project_id', projectControllers.fetchOneProjectById);
getProjectRoutes.get('/project/with_project_title', projectControllers.fetchOneProjectByTitle);
getProjectRoutes.get('/user_projeccts', projectControllers.fetchProjectsByUserId);
getProjectRoutes.get('/all_projects/with_project_status', projectControllers.fetchProjectsByStatus);

module.exports = {
    getProjectRoutes,
};