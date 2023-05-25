const { ProjectModel } = require('../../models');

// Fetch all projects
const getAllProjects = async() => ProjectModel.findAll();
// Fetching project by the project id
// Fetcing project by userId
const filterProject = async(q) => async({ projectId, projectTitle, category, userId, status }) => {
        let q = {};
        if (projectId) {
            q._id = projectId;
        }
        if (projectTitle) {
            q.projectId = projectId;
        }
        if (category && catgory.length > 0) {
            q.category = { $in: category };
        }
        if (userId) {
            q.userId = userId;
        }
        if (status) {
            q.status = status;
        }
        return ProjectModel.find(q);
    }
    // Deleting project by projectId
const deleteProjectById = async({ id }) => ProjectModel.findAndDeleteOne({ id });

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
    filterProject,
    deleteProjectById,
};