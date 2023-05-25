const { FeedbackModel } = require('../../models');

// transacction missing
const createFeedback = async ({
  userId, assignmentID, rating, comment, like,
}, transaction) => {
  const feedback = new FeedbackModel({
    userId, assignmentID, rating, comment, like,
  });
  const saveFeedback = await feedback.save({ transaction });
  return saveFeedback;
};

const getFeedbacks = async ({ like, rating }) => {
  const query = {};
  if (like) {
    query.like = like;
  }
  if (rating) {
    query.rating = rating;
  }

  return FeedbackModel.find(query);
};

const updateTheFeedback = async ({
  feedbackId, like, comment, rating,
}) => FeedbackModel.findByIdAndUpdate(feedbackId, { like, comment, rating });

const deleteFeedback = async (feedbackId) => FeedbackModel.findByIdAndDelete(feedbackId);

module.exports = {
  createFeedback, getFeedbacks, updateTheFeedback, deleteFeedback,
};
