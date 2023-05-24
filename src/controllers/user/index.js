const { registerUser } = require('./register.controllers');
const { userLogin } = require('./login.controller');
const { verifyMagicLink, verifyOtp, resendOTP } = require('./verify.controller');

module.exports = {
  registerUser,
  userLogin,
  verifyOtp,
  verifyMagicLink,
  resendOTP,
};
