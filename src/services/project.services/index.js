const {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectsByStatus,
    getProjectsByUserId,
    createProject,
    updateTheProject
} = require('./project.services');

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectsByStatus,
    getProjectsByUserId,
    createProject,
    updateTheProject,
};