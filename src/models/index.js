const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const AssignmentsModel = require('./assignment.model');
const FeedbackModel = require('./assignment.feedback.model');
const UserIndentificationSchema = require('./user_identification.model');
const CourseAssignmentModel = require('./course.assignment.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIndentificationSchema,
  AssignmentsModel,
  FeedbackModel,
  CourseAssignmentModel,
};
