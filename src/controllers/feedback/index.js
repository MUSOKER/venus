const { addFeedback } = require('./feedback.controller');
const { findFeedback } = require('./feedback.controller');
const { updateFeedback } = require('./feedback.controller');
const { removeFeedback } = require('./feedback.controller');

module.exports = {
  addFeedback,
  findFeedback,
  updateFeedback,
  removeFeedback,
};
