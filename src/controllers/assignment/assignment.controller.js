const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { assignmentServices } = require('../../services');
const { assignmentValidation } = require('../../validations');

const addAssignment = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = await assignmentValidation.addAssignmentValidation.validateAsync(req.body);
    const Assignment = await assignmentServices.createAssignment({
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    });
    return success.handler({ Assignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findAssignments = async (req, res, next) => {
  try {
    const {
      title, category, isActive, difficultyLevel,
      marks,
    } = await assignmentValidation.findAssignmentValidation.validateAsync(req.query);
    const {
      assignmentId: _id,
    } = await assignmentValidation.findAssignmentValidation.validateAsync(req.params) || null;
    const assignments = await assignmentServices.getAssignments({
      _id,
      title,
      category,
      isActive,
      difficultyLevel,
      marks,
    });
    if (assignments.length === 0) {
      throw error.throwNotFound({ message: 'Assignments Not Found' });
    }
    return success.handler({ assignments }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeAssignment = async (req, res, next) => {
  try {
    const { assignmentId } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    const deleteAssignment = await assignmentServices.deleteAssignment(assignmentId);

    if (!deleteAssignment) {
      throw error.throwNotFound({ message: 'Assignment Not Found' });
    }
    return success.handler({ deleteAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateAssignment = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = await assignmentValidation.updateAssignmentValidation.validateAsync(req.body);
    const { assignmentId } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    const updatedAssignment = await assignmentServices.updateTheAssignment({
      assignmentId,
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    });
    return success.handler({ updatedAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addAssignment, findAssignments, removeAssignment, updateAssignment,
};
