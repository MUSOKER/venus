const { ProjectModel } = require('../../models');

// Fetching projects
<<<<<<< HEAD
const getProject = async({ projectId, projectTitle, category, userId, status }) => {
        let q = {};
        if (projectId) {
            q._id = projectId;
        }
        if (projectTitle) {
            q.projectTitle = projectTitle;
        }
        if (category && category.length > 0) {
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
=======
const getProject = async ({
  projectId, projectTitle, category, userId, status,
}) => {
  const q = {};
  if (projectId) {
    q._id = projectId;
  }
  if (projectTitle) {
    q.projectId = projectId;
  }
  if (category && category.length > 0) {
    q.category = { $in: category };
  }
  if (userId) {
    q.userId = userId;
  }
  if (status) {
    q.status = status;
  }
  return ProjectModel.find(q);
};
// Deleting project by projectId
const deleteProjectById = async ({ id }) => ProjectModel.findAndDeleteOne({ id });
>>>>>>> e0e2b89f8d2df9d3edf72c47a96b002d635b8d80

const createProject = async ({
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

const updateTheProject = async ({
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
}) => ProjectModel.findByIdAndUpdate(projectId, {
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
}, { returnedDocument: 'after' });

module.exports = {
  createProject,
  updateTheProject,
  getProject,
  deleteProjectById,
};
