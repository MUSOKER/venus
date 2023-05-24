/* eslint-disable no-unused-vars */
const { error, success } = require('@Enseedling/enseedling-lib-handler');
// const { google } = require('googleapis');
const AssignmentsModel = require('../../models/assignment.model');
const { assignmentServices } = require('../../services');
// eslint-disable-next-line consistent-return
const addAssignment = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      statuss,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = req.body;
    const Assignment = await assignmentServices.createAssignment({
      title,
      description,
      requirements,
      statuss,
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

// eslint-disable-next-line consistent-return
const findAssignments = async (req, res, next) => {
  try {
    const {
      title, category, statuss, difficultyLevel,
      marks,
    } = req.query;
    const assignments = await assignmentServices.getAssignments({
      title,
      category,
      statuss,
      difficultyLevel,
      marks,
    });

    return success.handler({ assignments }, req, res, next);
  } catch (err) {
    console.log(err, req, res, next);
  }
};

const removeAssignment = async (req, res, next) => {
  try {
    const { assignmentId } = req.params;
    const deleteAssignment = await assignmentServices.deleteAssignment(assignmentId);
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
      statuss,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = req.body;
    const { assignmentId } = req.params;
    const updatedAssignment = await assignmentServices.updateTheAssignment({
      assignmentId,
      title,
      description,
      requirements,
      statuss,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    });
    return success.handler({ message: 'updated successfully' }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addAssignment, findAssignments, removeAssignment, updateAssignment,
};
