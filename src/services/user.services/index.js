const {
  getUserByEmail,
  getUserByIdFromIdentification,
  createUser,
  createUserIdentification,
} = require('./user.services');

module.exports = {
  getUserByEmail,
  createUser,
  createUserIdentification,
  getUserByIdFromIdentification,
};
