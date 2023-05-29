const userServices = require('./user.services');
const notificationDispatcher = require('./thirdParty');
const categoryServices = require('./category.services');
const projectServices= require('./project.services');
const courseServices = require('./course.services');

module.exports = {
    userServices,
    notificationDispatcher,
    projectServices,
    courseServices,
  categoryServices,
};