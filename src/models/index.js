const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const AssignmentsModel = require('./assignment.model');
const assignmentFeedbackModel = require('./assignment.feedback.model');
const CourseAssignmentModel = require('./course.assignment.model');
const UserIdentificationSchema = require('./user_identification.model');
const ProjectModel = require('./project.model');
const CategoryModel = require('./category.model');
const PostedInternshipModel = require('./posted_internship.model');
const EnrolledCourseModel = require('./enrolledCourses.model');
<<<<<<< HEAD
<<<<<<< HEAD
const CourseModel = require('./course.model')
const TopicModel = require("./topic.model")

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIdentificationSchema,
  ProjectModel,
  EnrolledCourseModel,
  CategoryModel,
  CourseModel,
  TopicModel,
};
=======
const ChapterModel = reuire('./chapter.model');

module.exports = {
    UserModel,
    AddressModel,
    AdminModel,
    UserIdentificationSchema,
    ProjectModel,
    EnrolledCourseModel,
    CategoryModel,
    ChapterModel,
};
>>>>>>> 548fe013358a35cd3ac5c8d98c5f8c4ec56e015e
=======
const AppliedInternshipModel = require('./applied_internship.model');
const MessageModel = require('./message.model');
const ChapterModel = require('./chapter.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  ProjectModel,
  AppliedInternshipModel,
  PostedInternshipModel,
  CategoryModel,
  EnrolledCourseModel,
  ChapterModel,
  AssignmentsModel,
  assignmentFeedbackModel,
  CourseAssignmentModel,
  UserIdentificationSchema,
  MessageModel,
};
>>>>>>> d400164d1c0f98c59398600677daa2d10a6f082d
