const { registerUser } = require('./register.controllers');
const { userLogin } = require('./login.controller');
const { verifyMagicLink, verifyOtp } = require('./verify.controller');

module.exports = {
  registerUser,
  userLogin,
  verifyOtp,
  verifyMagicLink,
};
