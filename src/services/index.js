const userServices = require('./user.services');
const assignmentServices = require('./assignment.services');
const notificationDispatcher = require('./thirdParty');
const internshipService = require('./internship.services');
const assignmentFeedbackServices = require('./assignment.feedback.services');
const courseAssignmentServices = require('./courseAssignment.services');
const categoryServices = require('./category.services');
const projectServices = require('./project.services');
const courseServices = require('./course.services');
const chapterServices = require('./chapter.services');
const topicServices = require('./topic.services');

module.exports = {
  userServices,
  notificationDispatcher,
  internshipService,
  assignmentServices,
  courseAssignmentServices,
  assignmentFeedbackServices,
  projectServices,
  courseServices,
  categoryServices,
  topicServices,
  chapterServices,
};
