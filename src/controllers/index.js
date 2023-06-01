const userControllers = require('./user');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const topicControllers = require('./topic');
const chaptertControllers = require('./chapter');

module.exports = {
  userControllers,
  assignmentController,
  assignmentFeedBack,
  courseAssignmentController,
  projectControllers,
  courseControllers,
  categoryControllers,
  topicControllers,
  chaptertControllers,
};
