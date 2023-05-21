const { validateSignUp } = require('./register.user.validations');
const { userloginValidation } = require('./login.user.validations');

module.exports = {
  validateSignUp,
  userloginValidation,
};
