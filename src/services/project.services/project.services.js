const { ProjectModel } = require('../../models');


// Fetch all projects
const getAllProjects = async() => ProjectModel.findALL();
// Fetching project by the project id
const getProjectById = async({ id }) => ProjectModel.findOne({ id });
// Fetching project by the project title
const getProjectByTitle = async({ title }) => ProjectModel.findOne({ title });
// Fetching projects by status
const getProjectByStatus = async({ status }) => ProjectModel.findOne({ status });

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectByStatus,
};