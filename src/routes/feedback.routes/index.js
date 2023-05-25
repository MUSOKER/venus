const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const theFeedbackRoutes = require('./feedback.routes');

const feedbackRoutes = express.Router();
feedbackRoutes.use(theFeedbackRoutes);
feedbackRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = feedbackRoutes;
