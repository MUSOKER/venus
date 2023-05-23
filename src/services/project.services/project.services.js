const { ProjectModel } = require('../../models');


// Fetch all projects
const getAllProjects = async() => ProjectModel.findALL();
// Fetching project by the project id
const getProjectById = async({ id }) => ProjectModel.findOne({ id });
// Fetching project by the project title
const getProjectByTitle = async({ title }) => ProjectModel.findOne({ title });
// Fetching projects by status
const getProjectsByStatus = async({ status }) => ProjectModel.findAll({ status });
const getProjectsByUserId = async({ userId }) => ProjectModel.findAll({ userId });

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectsByStatus,
    getProjectsByUserId,
};