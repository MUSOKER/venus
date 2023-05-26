const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { feedbackServices } = require('../../services');
const { assignmentValidation } = require('../../validations');
const { feedbackValidation } = require('../../validations');

const createUpdateFeedback = async (req, res, next) => {
  try {
    const { like, comment, rating } = await feedbackValidation.createUpdateFeedbackVal.validateAsync(req.body);
    const { assignmentId } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    console.log(assignmentId);
    await feedbackServices.createUpdateTheFeedback({
      assignmentId, like, comment, rating,
    });
    return success.handler({ message: 'feedback created/ updated successfully' }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeFeedback = async (req, res, next) => {
  try {
    const { feedbackId } = await feedbackValidation.feedbackIdValidation.validateAsync(req.params);
    const deleteFeedback = await feedbackServices.deleteFeedback(feedbackId);
    return success.handler({ deleteFeedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  createUpdateFeedback, removeFeedback,
};
