const express = require('express');
const { feedbackController } = require('../../controllers');

const theFeedbackRoutes = express.Router();

theFeedbackRoutes.post('/feedback', feedbackController.addFeedback);
theFeedbackRoutes.get('/feedback', feedbackController.findFeedback);
theFeedbackRoutes.put('/:feedbackId', feedbackController.updateFeedback);
theFeedbackRoutes.delete('/:feedbackId', feedbackController.removeFeedback);

module.exports = theFeedbackRoutes;
