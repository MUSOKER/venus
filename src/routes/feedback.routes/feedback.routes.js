const express = require('express');
const { feedbackController } = require('../../controllers');

const theFeedbackRoutes = express.Router();

theFeedbackRoutes.put('/:assignmentId', feedbackController.createUpdateFeedback);
theFeedbackRoutes.delete('/:feedbackId', feedbackController.removeFeedback);

module.exports = theFeedbackRoutes;
