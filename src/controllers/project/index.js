const {
    fetchAllProjects,
    fetchOneProjectById,
    fetchOneProjectByTitle,
    fetchProjectsByUserId,
    fetchProjectsByStatus,
    addProject,
    updateProject
} = require('./project.controllers');

module.exports = {
    fetchAllProjects,
    fetchOneProjectById,
    fetchOneProjectByTitle,
    fetchProjectsByUserId,
    fetchProjectsByStatus,
    addProject,
    updateProject
};