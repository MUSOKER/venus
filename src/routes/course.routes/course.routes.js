const express = require('express');

const { courseControllers } = require('../../controllers');

const courseRoutes = express.Router();

courseRoutes.get('/getCourses', courseControllers.findCourses);
courseRoutes.post('/create', courseControllers.createCourse);
courseRoutes.put('/:courseId', courseControllers.updateCourse);

module.exports = courseRoutes;
