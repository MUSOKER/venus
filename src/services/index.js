const userServices = require('./user.services');
const assignmentServices = require('./assignment.services');
const notificationDispatcher = require('./thirdParty');
const assignmentFeedbackServices = require('./assignment.feedback.services');
const courseAssignmentServices = require('./courseAssignment.services');
const categoryServices = require('./category.services');
const projectServices = require('./project.services');
const courseServices = require('./course.services');
const chapterServices = require('./chapter.services');
const topicServices = require('./topic.services');
const messageServices = require('./message.services');

module.exports = {
  userServices,
  notificationDispatcher,
  assignmentServices,
  courseAssignmentServices,
  assignmentFeedbackServices,
  projectServices,
  courseServices,
  categoryServices,
  topicServices,
  chapterServices,
  messageServices,
};
