const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  rating_value: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const RatingModel = mongoose.model('rating', ratingSchema);
module.exports = RatingModel;
