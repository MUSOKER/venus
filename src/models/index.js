const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const UserIndentificationSchema = require('./user_identification.model');
const AppliedInternshipSchema = require('./applied_internship.model');
const PostedInternshipSchema = require('./posted_internship.model');
const ProjectModel = require('./project.model');
const CategoryModel = require('./category.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIndentificationSchema,
  ProjectModel,
  CategoryModel
};
