const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { courseAssignmentServices } = require('../../services');

const addCourseAssignment = async (req, res, next) => {
  try {
    const {
      courseID,
      assignmentId,
      status,
      courseCompletition,
    } = req.body;
    const addedCourseAssignment = await courseAssignmentServices.createCourseAssignment({
      courseID,
      assignmentId,
      status,
      courseCompletition,
    });
    return success.handler({ addedCourseAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findCourseAssignment = async (req, res, next) => {
  try {
    const {
      status,
      courseCompletition,
    } = req.query;
    const CourseAssignments = await courseAssignmentServices.getCourseAssignment({
      status,
      courseCompletition,
    });
    return success.handler({ CourseAssignments }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeCourseAssignment = async (req, res, next) => {
  try {
    const { courseAssignmentId } = req.params;
    const deletedCourseAssignment = await courseAssignmentServices.deleteCourseAssignment(courseAssignmentId);
    return success.handler({ deletedCourseAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateCourseAssignment = async (req, res, next) => {
  try {
    const {
      status,
      courseCompletition,
    } = req.body;
    const { courseAssignmentId } = req.params;
    await courseAssignmentServices.updateTheCourseAssignment({
      courseAssignmentId,
      status,
      courseCompletition,
    });
    return success.handler({ message: 'updated successfully' }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addCourseAssignment,
  findCourseAssignment,
  removeCourseAssignment,
  updateCourseAssignment,
};
