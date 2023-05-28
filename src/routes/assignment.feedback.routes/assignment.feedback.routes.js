const express = require('express');
const { assignmentFeedBack } = require('../../controllers');

const assignmentFeedbackRoutes = express.Router();

assignmentFeedbackRoutes.put('/:assignmentId', assignmentFeedBack.createAssignmentFeedback);
assignmentFeedbackRoutes.delete('/:feedbackId', assignmentFeedBack.removeAssignmentFeedback);

module.exports = assignmentFeedbackRoutes;
