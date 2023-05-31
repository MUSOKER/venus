const mongoose = require('mongoose');

const courseAssignmentSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
  },
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'assignments',
  },
  status: {
    type: Number,
    required: true,
  },
  courseCompletition: {
    type: Boolean,
    required: true,
  },
});

const CourseAssignmentModel = mongoose.model('course_assignment', courseAssignmentSchema);

module.exports = CourseAssignmentModel;
