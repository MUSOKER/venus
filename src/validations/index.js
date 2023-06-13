const userValidation = require('./user.validations');
const assignmentValidation = require('./assignments.validations');
const assignmentFeedBackValidation = require('./assignment.feedback.validations');
const courseAssignmentValidation = require('./course.assignment.validations');
const projectValidation = require('./project.validations');
const categoryValidation = require('./category.validations');
const internshipValidation = require('./internship.validations');
const courseValidation = require('./course.validations');
const topicValidation = require('./topic.validations');
const chapterValidation = require('./chapter.validations');
<<<<<<< HEAD
const teacherValidation = require('./teacher.validations');
module.exports = {
    userValidation,
    projectValidation,
    categoryValidation,
    courseValidation,
    chapterValidation,
    teacherValidation,
};
=======
const messagesValidation = require('./message.validations');

module.exports = {
  userValidation,
  projectValidation,
  categoryValidation,
  internshipValidation,
  assignmentValidation,
  assignmentFeedBackValidation,
  courseAssignmentValidation,
  courseValidation,
  chapterValidation,
  messagesValidation,
  topicValidation,
};
>>>>>>> e0e2b89f8d2df9d3edf72c47a96b002d635b8d80
