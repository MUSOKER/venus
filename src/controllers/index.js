const userControllers = require('./user');
const internshipControllers = require('./internship');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');

module.exports = {
  userControllers,
  assignmentController,
  assignmentFeedBack,
  courseAssignmentController,
  internshipControllers,
};


