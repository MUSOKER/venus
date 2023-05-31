const { assignmentFeedbackModel } = require('../../models');

const createUpdateTheFeedback = async ({
  assignmentId, like, comment, rating,
}) => {
  const filter = { assignmentId };
  const update = { like, comment, rating };
  const upsert = { upsert: true, new: true };
  await assignmentFeedbackModel.findOneAndUpdate(filter, update, upsert);
};

const deleteAssignmentFeedback = async (feedbackId) => assignmentFeedbackModel.findByIdAndDelete(feedbackId);

module.exports = {
  createUpdateTheFeedback, deleteAssignmentFeedback,
};
