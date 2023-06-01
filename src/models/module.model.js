const mongoose = require('mongoose');

const { Schema } = mongoose;

const moduleSchema = new Schema({
  module_name: {
    type: String,
    required: true,
  },
  topic_id: {
    type: Schema.Types.ObjectId,
    ref: 'topic',
    required: true,
  },
  module_description: {
    type: String,
    required: true,
  },
  demo_src: {
    type: String,
  },
  totalChapters: {
    type: Number,
  },
  duration: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const ModuleModel = mongoose.model('module', moduleSchema);

module.exports = ModuleModel;
