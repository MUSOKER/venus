const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { assignmentFeedbackServices } = require('../../services');
const { assignmentValidation } = require('../../validations');
const { assignmentFeedBackValidation } = require('../../validations');

const createAssignmentFeedback = async (req, res, next) => {
  try {
    const { like, comment, rating } = await assignmentFeedBackValidation.createAssignmentFeedbackVal.validateAsync(req.body);
    const { assignmentId } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    await assignmentFeedbackServices.createAssignmentTheFeedback({
      assignmentId, like, comment, rating,
    });
    return success.handler({ message: 'feedback created/ updated successfully' }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeAssignmentFeedback = async (req, res, next) => {
  try {
    const { feedbackId } = await assignmentFeedBackValidation.assignmentFeedbackIdValidation.validateAsync(req.params);
    const deleteFeedback = await assignmentFeedbackServices.assignmentDeleteFeedback(feedbackId);
    return success.handler({ deleteFeedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  createAssignmentFeedback, removeAssignmentFeedback,
};
