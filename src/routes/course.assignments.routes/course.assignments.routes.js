const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { courseAssignmentController } = require('../../controllers');

const courseAssignmentsRoutes = express.Router();
courseAssignmentsRoutes.post('/course_assignments', authentication, courseAssignmentController.addCourseAssignment);
courseAssignmentsRoutes.get('/course_assignments/:courseAssignmentsId?', authentication, courseAssignmentController.findCourseAssignment);
courseAssignmentsRoutes.put('/:courseAssignmentsId', authentication, courseAssignmentController.updateCourseAssignment);
courseAssignmentsRoutes.delete('/:courseAssignmentsId', authentication, courseAssignmentController.removeCourseAssignment);

module.exports = courseAssignmentsRoutes;
