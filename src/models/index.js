const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const UserIdentificationSchema = require('./user_identification.model');
const ProjectModel = require('./project.model');
const CategoryModel = require('./category.model');
<<<<<<< michael
const AppliedInternshipModel = require('./applied_internship.model');
const PostedInternshipModel = require('./posted_internship.model')
=======
const EnrolledCourseModel = require('./enrolledCourses.model');

>>>>>>> dev
module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIdentificationSchema,
  ProjectModel,
<<<<<<< michael
  AppliedInternshipModel,
  PostedInternshipModel,
  CategoryModel,
  CategoryModel
=======
  EnrolledCourseModel,
  CategoryModel,
>>>>>>> dev
};
