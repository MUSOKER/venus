const { error, success } = require('@Enseedling/enseedling-lib-handler');

const { Transaction } = require('../../utils');

const { projectValidation } = require('../../validations');

const { projectServices } = require('../../services');

const addProject = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
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
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateProject = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
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
    return success.handler({ message: 'course update' }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  addProject,
  updateProject,
};
