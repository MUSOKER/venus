const userServices = require('./user.services');
const notificationDispatcher = require('./thirdParty');
<<<<<<< HEAD
const internshipServices = require('./internship.services');

module.exports = {
  userServices,
  notificationDispatcher,
  internshipServices,
};
=======
const categoryServices = require('./category.services');
const projectServices = require('./project.services');
const courseServices = require('./course.services');
const chapterServices = require('./chapter.services')

module.exports = {
    userServices,
    notificationDispatcher,
    projectServices,
    courseServices,
    categoryServices,
    chapterServices,
};
>>>>>>> 5051c78a0c99af6e764295604fbd0dac24ae933f
