const userServices = require('./user.services');
const notificationDispatcher = require('./thirdParty');
const categoryServices = require('./category.services');
const projectServices = require('./project.services');
const courseServices = require('./course.services');
const chapterServices = require('./chapter.services');
const processFileService = require('./resume_upload.service');
module.exports = {
    userServices,
    notificationDispatcher,
    projectServices,
    courseServices,
    categoryServices,
    chapterServices,
    processFileService,
};