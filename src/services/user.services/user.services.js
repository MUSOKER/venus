const { UserModel, UserIndentificationSchema } = require('../../models');

const getUserByEmail = async ({ email }) => UserModel.findOne({ email });

const getUserByIdFromIdentification = async ({ id }) => UserIndentificationSchema.findById(id);

module.exports = {
  getUserByEmail,
  getUserByIdFromIdentification,
};
