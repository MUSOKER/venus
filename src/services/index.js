const userServices = require('./user.services');
const projectServices = require('./project.services');
const notificationDispatcher = require('./thirdParty');
const projectServices = require('./project.services');
const courseServices = require('./course.services');

module.exports = {
    userServices,
    notificationDispatcher,
    projectServices,
    courseServices,
};