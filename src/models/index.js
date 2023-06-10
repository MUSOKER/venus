const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const UserIdentificationSchema = require('./user_identification.model');
const CategoryModel = require('./category.model');
const ProjectModel = require('./project.model');
const EnrolledCourseModel = require('./enrolledCourses.model');
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
