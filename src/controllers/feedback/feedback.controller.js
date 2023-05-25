const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { feedbackServices } = require('../../services');

const addFeedback = async (req, res, next) => {
  try {
    const { id: userId } = req;
    const {
      assignmentID, rating, comment, like,
    } = req.body;
    const feedback = await feedbackServices.createFeedback({
      userId, assignmentID, rating, comment, like,
    });

    return success.handler({ feedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findFeedback = async (req, res, next) => {
  try {
    const { like, rating } = req.query;
    const feedbacks = await feedbackServices.getFeedbacks({ like, rating });
    return success.handler({ feedbacks }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateFeedback = async (req, res, next) => {
  try {
    const { like, comment, rating } = req.body;
    const { feedbackId } = req.params;
    const feedbackOutput = await feedbackServices.updateTheFeedback({
      feedbackId, like, comment, rating,
    });
    return success.handler({ feedbackOutput }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeFeedback = async (req, res, next) => {
  try {
    const { feedbackId } = req.params;
    const deleteFeedback = await feedbackServices.deleteFeedback(feedbackId);
    return success.handler({ deleteFeedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  addFeedback, findFeedback, updateFeedback, removeFeedback,
};
