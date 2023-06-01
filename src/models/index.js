const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const AssignmentsModel = require('./assignment.model');
const assignmentFeedbackModel = require('./assignment.feedback.model');
const CourseAssignmentModel = require('./course.assignment.model');
const UserIdentificationSchema = require('./user_identification.model');
const CategoryModel = require('./category.model');
const ProjectModel = require('./project.model');
const EnrolledCourseModel = require('./enrolledCourses.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  AssignmentsModel,
  assignmentFeedbackModel,
  CourseAssignmentModel,
  UserIdentificationSchema,
  ProjectModel,
  EnrolledCourseModel,
  CategoryModel,
};