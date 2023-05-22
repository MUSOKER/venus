const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const UserIndentificationSchema = require('./user_identification.model');
const AppliedInternshipSchema = require('./applied_internship.model');
const PostedInternshipSchema = require('./posted_internship.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIndentificationSchema,
  AppliedInternshipSchema,
  PostedInternshipSchema
};
