const userControllers = require('./user');
const internshipControllers = require('./internship');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const chaptertControllers = require('./Chapter');
const topicControllers = require('./topic');
const messageControllers = require('./message');
const uploadControllers = require('./upload_resume');
const teacherControllers = require('./teacher');

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
    chaptertControllers,
    messageControllers,
    uploadControllers,
    teacherControllers,

};