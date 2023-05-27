const {
  getUserByEmail,
  getUserByIdFromIdentification,
  createUser,
  createUserIdentification,
  getUserByUserId,
  getUserInfoByUserId,
  getCandidates,
} = require('./user.services');

module.exports = {
  getUserByEmail,
  getUserByUserId,
  createUser,
  createUserIdentification,
  getCandidates,
  getUserByIdFromIdentification,
  getUserInfoByUserId,
};
