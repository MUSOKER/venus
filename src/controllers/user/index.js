const { registerUser } = require('./register.controllers');
const { userLogin } = require('./login.controller');
const { verifyMagicLink, verifyOtp, resendOTP } = require('./verify.controller');
<<<<<<< HEAD
const { fetchUserInfo } = require('./userInfo.controller');
=======
const { fetchUserInfo, updateUserInfo } = require('./userInfo.controller');
>>>>>>> 5051c78a0c99af6e764295604fbd0dac24ae933f

module.exports = {
  registerUser,
  userLogin,
  fetchUserInfo,
  verifyOtp,
  verifyMagicLink,
  updateUserInfo,
  resendOTP,
};
