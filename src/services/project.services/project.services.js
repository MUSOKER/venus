const { ProjectModel } = require('../../models');

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
}) => ProjectModel.findByIdAndUpdate(
  projectId,
  {
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
  },
  { returnedDocument: 'after' },
);

module.exports = {
  createProject,
  updateTheProject,
};
