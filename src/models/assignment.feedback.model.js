const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'assignments',
    required: true,
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
