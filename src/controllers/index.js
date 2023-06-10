const userControllers = require('./user');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const chaptertControllers = require('./Chapter');
const uploadControllers = require('./upload_resume');
const teacherControllers = require('./teacher');
module.exports = {
    userControllers,
    projectControllers,
    courseControllers,
    categoryControllers,
    chaptertControllers,
    uploadControllers,
    teacherControllers,
};