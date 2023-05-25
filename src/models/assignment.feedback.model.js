const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  assignmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'assignments',
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: Array,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
  },

});

const FeedbackModel = mongoose.model('assignment-feedback', FeedbackSchema);

module.exports = FeedbackModel;
