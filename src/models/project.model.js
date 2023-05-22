const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
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
  projectImage: {
    type: String,
  },
  projectMilestone: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'to-do'],
    required: true,
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: 'category', required: true },
  comments: {
    type: Array,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
}, {
  timestamps: true,
});

const ProjectModel = mongoose.model('project', projectSchema);
module.exports = ProjectModel;
