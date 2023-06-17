const userControllers = require('./user');
const internshipControllers = require('./internship');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const topicControllers = require('./topic');
const chapterControllers = require('./chapter');
const messageControllers = require('./message');
const uploadControllers = require('./upload');

module.exports = {
  userControllers,
  internshipControllers,
  assignmentController,
  assignmentFeedBack,
  courseAssignmentController,
  projectControllers,
  courseControllers,
  categoryControllers,
  topicControllers,
  chapterControllers,
  messageControllers,
  uploadControllers,
};
