const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  course_name: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
  },
  course_description: {
    type: String,
    required: true,
  },
  course_duration: {
    type: Number,
    required: true,
  },
  course_rating: {
    type: Schema.Types.ObjectId,
    ref: 'rating',
  },
  course_thumb_image: {
    type: String,
    required: true,
  },
  course_state: {
    type: String,
  },
  category_ids: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  }],
  social_media_links: {
    type: Array,
  },
  total_videos: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
  },

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  demo_video_src: {
    type: String,
  },
  meta_info: {
    type: Array,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const CourseModel = mongoose.model('course', courseSchema);
module.exports = CourseModel;
