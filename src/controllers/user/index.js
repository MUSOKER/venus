const { registerUser } = require('./register.controllers');
const { userLogin } = require('./login.controller');
const { verifyMagicLink, verifyOtp, resendOTP } = require('./verify.controller');
const { fetchUserInfo } = require('./userInfo.controller');

module.exports = {
  registerUser,
  userLogin,
  fetchUserInfo,
  verifyOtp,
  verifyMagicLink,
  resendOTP,
};
