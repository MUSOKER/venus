const mongoose = require('mongoose');

const { Schema } = mongoose;

const postedInternshipSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },

    internshipTitle: {
      type: String,
      required: true,
    },
    internshipDescription: {
      type: String,
      required: true,
    },
    internshipType: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    skills: {
      type: [String],
    },
    responsibilities: {
      type: [String],
    },
    qualification: {
      type: String,
    },
    internshipEndDate: {
      type: Date,
    },
    numberOfOpenings: {
      type: Number,
      default: 1,
    },
    internshipStatus: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
    internshipLocation: {
      type: String,
      default: 'Point',
    },
    experienceLevel: {
      type: String,
      enum: ['Entry_Level', 'Junior_Level', 'Mid_Level', 'Senior_Level'],
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    ApprovedAt: {
      type: Date,
    },
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['Approved', 'Rejected', 'Pending'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  },
);

const PostedInternshipModel = mongoose.model(
  'PostedInternship',
  postedInternshipSchema,

);

module.exports = PostedInternshipModel;
