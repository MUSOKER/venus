const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const userloginValidation = Joi.object().keys({
  email: enseedlingValidator.email.required().label('Email'),
});

module.exports = {
  userloginValidation,
};
