const { FeedbackModel } = require('../../models');

// transacction missing
// const createFeedback = async ({
//   userId, assignmentID, rating, comment, like,
// }, transaction) => {
//   const feedback = new FeedbackModel({
//     userId, assignmentID, rating, comment, like,
//   });
//   const saveFeedback = await feedback.save({ transaction });
//   return saveFeedback;
// };

// const getFeedbacks = async ({ like, rating }) => {
//   const query = {};
//   if (like) {
//     query.like = like;
//   }
//   if (rating) {
//     query.rating = rating;
//   }

//   return FeedbackModel.find(query);
// };

const createUpdateTheFeedback = async ({
  assignmentId, like, comment, rating,
}) => {
  const filter = { assignmentId };
  const update = { like, comment, rating };
  const upsert = { upsert: true, new: true };
  console.log(filter);
  await FeedbackModel.findOneAndUpdate(filter, update, upsert);
};

const deleteFeedback = async (feedbackId) => FeedbackModel.findByIdAndDelete(feedbackId);

module.exports = {
  createUpdateTheFeedback, deleteFeedback,
};

// createFeedback, getFeedbacks
