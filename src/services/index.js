const userServices = require('./user.services');
const assignmentServices = require('./assignment.services');
const notificationDispatcher = require('./thirdParty');

module.exports = {
  userServices,
  notificationDispatcher,
  assignmentServices,
};
