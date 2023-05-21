const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const validateSignUp = Joi.object().keys({
  fullName: enseedlingValidator.name.required().label('Full Name'),
  email: enseedlingValidator.email.required().label('Email'),
  contactNo: Joi.array().items(enseedlingValidator.phoneNo.required()).label('Contact Number'),
  visibility: enseedlingValidator.generic.string.medium.required().label('Visibility'),
  aadharNo: enseedlingValidator.generic.number.positive.required().label('Aadhar Number'),
  panNo: enseedlingValidator.generic.string.small.required().label('Pan Number'),
  password: enseedlingValidator.generic.string.any.required().label('Password'),
  name: enseedlingValidator.generic.string.medium.required().label('Name'),
  country: enseedlingValidator.generic.string.small.required().label('Country'),
  state: enseedlingValidator.generic.string.medium.required().label('State'),
  city: enseedlingValidator.generic.string.small.required().label('City'),
  district: enseedlingValidator.generic.string.small.required().label('District'),
  pincode: enseedlingValidator.generic.string.small.required().label('Pincode'),
  landmark: enseedlingValidator.generic.string.any.required().label('Landmark'),
  street: enseedlingValidator.generic.string.medium.label('Street'),
});

module.exports = {
  validateSignUp,
};
