const express = require('express');

const { assignmentController } = require('../../controllers');

const assignmentsRoutes = express.Router();
assignmentsRoutes.post('/assignments', assignmentController.addAssignment);
assignmentsRoutes.get('/assignments', assignmentController.findAssignments);
// assignmentsRoutes.get('/:assignmentId', assignmentController.findAssignment);
assignmentsRoutes.put('/:assignmentId', assignmentController.updateAssignment);
assignmentsRoutes.delete('/:assignmentId', assignmentController.removeAssignment);
module.exports = assignmentsRoutes;
