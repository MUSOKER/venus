const {
    fetchAllProjects,
    fetchOneProjectById,
    fetchOneProjectByTitle,
    fetchProjectsByUserId,
    fetchProjectsByStatus,
} = require('./project.controllers');

module.exports = {
    fetchAllProjects,
    fetchOneProjectById,
    fetchOneProjectByTitle,
    fetchProjectsByUserId,
    fetchProjectsByStatus,
};