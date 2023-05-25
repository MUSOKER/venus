const userServices = require('./user.services');
const assignmentServices = require('./assignment.services');
const notificationDispatcher = require('./thirdParty');
const feedbackServices = require('./feedback.services');

module.exports = {
  userServices,
  notificationDispatcher,
  assignmentServices,
  feedbackServices,
};
