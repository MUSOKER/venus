const { error, success } = require('@Enseedling/enseedling-lib-handler');

const { projectValidation } = require('../../validations');

const { projectServices } = require('../../services');

const addProject = async (req, res, next) => {
  try {
    const {
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
    } = await projectValidation.addProjectValidation.validateAsync(req.body);

    const project = await projectServices.createProject({
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
    return success.handler({ project }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const {
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
    } = await projectValidation.updateProjectValidation.validateAsync(req.body);
    const { projectId } = await projectValidation.projectIdValidation.validateAsync(req.params);
    await projectServices.updateTheProject({
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
      categoryIds,
      comments,
      userId,
    });
    return success.handler({ updateProject }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addProject,
  updateProject,
};
