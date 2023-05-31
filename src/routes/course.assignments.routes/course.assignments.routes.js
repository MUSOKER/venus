const express = require('express');

const { courseAssignmentController } = require('../../controllers');

const courseAssignmentsRoutes = express.Router();
courseAssignmentsRoutes.post('/create', courseAssignmentController.addCourseAssignment);
courseAssignmentsRoutes.get('/find', courseAssignmentController.findCourseAssignment);
courseAssignmentsRoutes.put('/:courseAssignmentId', courseAssignmentController.updateCourseAssignment);
courseAssignmentsRoutes.delete('/:courseAssignmentId', courseAssignmentController.removeCourseAssignment);

module.exports = courseAssignmentsRoutes;
