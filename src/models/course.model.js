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
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'to_do'],
    required: true,
  },
  topics: [{
    type: Schema.Types.ObjectId,
    ref: 'topic',
    // required: true,
  }],
  modules: [{
    type: Schema.Types.ObjectId,
    ref: 'module',
    // required: true,
  }],
  chapters: [{
    type: Schema.Types.ObjectId,
    ref: 'module',
    // required: true,
  }],
<<<<<<< HEAD
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        // required: true,
    },
    instructorId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        // required: true,
    },
    demo_video_src: {
        type: String,
    },
    meta_info: {
        type: Array,
    },
    is_Active: {
        type: Boolean,
        default: true,
    },
=======
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  instructorId: {
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
  is_Active: {
    type: Boolean,
    default: true,
  },
>>>>>>> d400164d1c0f98c59398600677daa2d10a6f082d
}, {
  timestamps: true,
});

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'topics, modules, chapters ',
    select: 'topic_name, topics_description, module_name, module_description, chapter_name, video_src',
  });
  next();
});

const CourseModel = mongoose.model('course', courseSchema);
module.exports = CourseModel;
