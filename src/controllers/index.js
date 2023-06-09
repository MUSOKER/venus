const userControllers = require('./user');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const chaptertControllers = require('./Chapter');
const uploadControllers = require('./upload_resume');
const upload = require('upload_resume');
module.exports = {
    userControllers,
    projectControllers,
    courseControllers,
    categoryControllers,
    chaptertControllers,
    uploadControllers,
    upload
};