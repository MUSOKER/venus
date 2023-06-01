const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
  topic_name: {
    type: String,
    required: true,
  },
  topic_description: {
    type: String,
    required: true,
  },
  topic_duration: {
    type: Number,
    required: true,
  },
  topic_info: {
    type: String,
  },
  demo_src: {
    type: String,
  },
  totalVideos: {
    type: Number,
  },
}, {
  timestamps: true,
});

const TopicModel = mongoose.model('topic', topicSchema);
module.exports = TopicModel;
