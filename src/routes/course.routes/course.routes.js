const express = require('express');

const { courseControllers } = require('../../controllers');

const courseRoutes = express.Router();

courseRoutes.get('/getAll', courseControllers.findCourses);
courseRoutes.get('/:courseId', courseControllers.findCourse);
courseRoutes.post('/create', courseControllers.createCourse);
courseRoutes.put('/:courseId', courseControllers.updateCourse);

module.exports = courseRoutes;
