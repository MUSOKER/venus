const { ProjectModel } = require('../../models');

// Fetch all projects
const getAllProjects = async() => ProjectModel.findALL();
// Fetching project by the project id
const getProjectById = async({ id }) => ProjectModel.findOne({ id });
// Fetching project by the project title
const getProjectByTitle = async({ title }) => ProjectModel.findOne({ title });
// Fetching projects by status
const getProjectsByStatus = async({ status }) => ProjectModel.find({ status });
// Fetcing project by userId
const getProjectsByUserId = async({ userId }) => ProjectModel.find({ userId });
// Deleting project by projectId
const deleteProjectById = async({ id }) => ProjectModel.deleteOne({ id });

const createProject = async({
    projectTitle,
    projectDescription,
    projectLink,
    startDate,
    endDate,
    projectImage,
    projectMilestone,
    status,
    visibility,
    categoryIds,
    comments,
    userId,
}) => ProjectModel.create({
    projectTitle,
    projectDescription,
    projectLink,
    startDate,
    endDate,
    projectImage,
    projectMilestone,
    status,
    visibility,
    categoryIds,
    comments,
    userId,
});

const updateTheProject = async({
    projectId,
    projectTitle,
    projectDescription,
    projectLink,
    startDate,
    endDate,
    projectImage,
    projectMilestone,
    status,
    visibility,
    // categoryIds,
    comments,
    userId,
}) => ProjectModel.findByIdAndUpdate(
    projectId, {
        projectTitle,
        projectDescription,
        projectLink,
        startDate,
        endDate,
        projectImage,
        projectMilestone,
        status,
        visibility,
        // categoryIds,
        comments,
        userId,
    }, { returnedDocument: 'after' },
);

module.exports = {
    createProject,
    updateTheProject,
    getAllProjects,
    getProjectById,
    getProjectByTitle,
    getProjectsByStatus,
    getProjectsByUserId,
    deleteProjectById,
};