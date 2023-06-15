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
<<<<<<< HEAD
const processFileService = require('./resume_upload.service');
const teacherServices = require('./teacher.services');
module.exports = {
    userServices,
    notificationDispatcher,
    projectServices,
    courseServices,
    categoryServices,
    chapterServices,
    processFileService,
    teacherServices,
};
=======
const internshipServices = require('./internship.services');
const topicServices = require('./topic.services');
const messageServices = require('./message.services');

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
  messageServices,
  internshipServices,
};
>>>>>>> e0e2b89f8d2df9d3edf72c47a96b002d635b8d80
