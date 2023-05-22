const mongoose = require('mongoose');

const { Schema } = mongoose;

const appliedInternshipSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    internship_id: {
      type: Schema.Types.ObjectId,
      ref: 'PostedInternship',
      required: true,
    },
    selection_status: {
      type: String,
      enum: ['Hired', 'Rejected', 'Shortlisted','pending'],
      default: 'Pending',
    },
    additional_information: {
      type: String,
    },

  },
  {
    timestamps: true,
  },
);

const AppliedInternship = mongoose.model('AppliedInternship', appliedInternshipSchema);

module.exports = AppliedInternship;