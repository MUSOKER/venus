const userValidation = require('./user.validations');
const assignmentValidation = require('./assignments.validations');
const assignmentFeedBackValidation = require('./assignment.feedback.validations');
const projectValidation = require('./project.validations');
const categoryValidation = require('./category.validations');

module.exports = {
  userValidation,
  projectValidation,
  categoryValidation,
  assignmentValidation,
  assignmentFeedBackValidation,
};
