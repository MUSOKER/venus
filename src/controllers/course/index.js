const { findCourses } = require('./course.controllers');
const { findCourse } = require('./course.controllers');
const { createCourse } = require('./course.controllers');
const { updatCourse } = require('./course.controllers');

module.exports = {
    findCourses,
    findCourse,
    createCourse,
    updateCourse
};