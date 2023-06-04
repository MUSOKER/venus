const userControllers = require('./user');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');
const messageControllers = require('./message');
const projectControllers = require('./project');
const courseControllers = require('./course');
const categoryControllers = require('./category');
const topicControllers = require('./topic');
const chapterControllers = require('./chapter');

module.exports = {
  userControllers, 
  assignmentController, 
  assignmentFeedBack, 
  courseAssignmentController, 
  messageControllers,
  projectControllers,
  courseControllers,
  categoryControllers,
  topicControllers,
  chapterControllers,
};


