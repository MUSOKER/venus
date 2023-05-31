const express = require('express');

const { assignmentController } = require('../../controllers');

const assignmentsRoutes = express.Router();
assignmentsRoutes.post('/assignment', assignmentController.addAssignment);
assignmentsRoutes.get('/assignment/:assignmentId?', assignmentController.findAssignments);
assignmentsRoutes.put('/:assignmentId', assignmentController.updateAssignment);
assignmentsRoutes.delete('/:assignmentId', assignmentController.removeAssignment);

module.exports = assignmentsRoutes;
