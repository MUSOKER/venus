const mongoose = require('mongoose');

const { Schema } = mongoose;

const chapterSchema = new Schema({
  chapter_name: {
    type: String,
    required: true,
  },
  module_id: {
    type: Schema.Types.ObjectId,
    ref: 'module',
    required: true,
  },
  chapter_description: {
    type: String,
    required: true,
  },
  video_src: {
    type: String,
  },
  duration: {
    type: Number,
  },
  comments: {
    type: Array,
  },
}, {
  timestamps: true,
});

const ChapterModel = mongoose.model('chapter', chapterSchema);

module.exports = ChapterModel;
