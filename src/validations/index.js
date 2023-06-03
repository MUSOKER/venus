const userValidation = require('./user.validations');
const assignmentValidation = require('./assignments.validations');
const assignmentFeedBackValidation = require('./assignment.feedback.validations');
const courseAssignmentValidation = require('./course.assignment.validations');
const projectValidation = require('./project.validations');
const categoryValidation = require('./category.validations');
const courseValidation = require('./course.validations');
const chapterValidation = require('./chapter.validations');

module.exports = {
  userValidation,
  projectValidation,
  categoryValidation,
  assignmentValidation,
  assignmentFeedBackValidation,
  courseAssignmentValidation,
  courseValidation,
  chapterValidation,
};
