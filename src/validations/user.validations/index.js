<<<<<<< HEAD
const { validateSignUp } = require('./user.validations');
=======
const { userValidation } = require('./user.validations');
>>>>>>> 5051c78a0c99af6e764295604fbd0dac24ae933f
const { userloginValidation, userOTPVerificationValidations } = require('./login.user.validations');

module.exports = {
  userValidation,
  userloginValidation,
  userOTPVerificationValidations,
};
