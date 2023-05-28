const userServices = require('./user.services');
const assignmentServices = require('./assignment.services');
const notificationDispatcher = require('./thirdParty');
const assignmentFeedbackServices = require('./assignment.feedback.services');
const courseAssignmentServices = require('./courseAssignment.services');

module.exports = {
  userServices,
  notificationDispatcher,
  assignmentServices,
  courseAssignmentServices,
  assignmentFeedbackServices,
};
