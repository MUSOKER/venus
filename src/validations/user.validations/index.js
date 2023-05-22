const { validateSignUp } = require('./user.validations');
const { userloginValidation } = require('./login.user.validations');

module.exports = {
  validateSignUp,
  userloginValidation,
};
