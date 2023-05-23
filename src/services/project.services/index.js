const {
    getAllProjects,
    getProjectById,
} = require('./project.services');

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectByStatus,
};