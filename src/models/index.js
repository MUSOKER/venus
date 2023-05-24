const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const UserIndentificationSchema = require('./user_identification.model');
const AppliedInternshipModel = require('./applied_internship.model');
const PostedInternshipModel = require('./posted_internship.model');
const ProjectModel = require('./project.model');
const CategoryModel = require('./category.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIndentificationSchema,
  ProjectModel,
  AppliedInternshipModel,
  PostedInternshipModel,
  CategoryModel
};
