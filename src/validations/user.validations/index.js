const { validateSignUp } = require('./user.validations');
const { userloginValidation, userOTPVerificationValidations } = require('./login.user.validations');

module.exports = {
  validateSignUp,
  userloginValidation,
  userOTPVerificationValidations,
};
