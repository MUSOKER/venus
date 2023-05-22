const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const validateSignUp = Joi.object().keys({
  fullName: enseedlingValidator.name.required().label('Full Name'),
  email: enseedlingValidator.email.required().label('Email'),
  contactNo: Joi.array().items(enseedlingValidator.phoneNo.required()).label('Contact Number'),
  profilePic: enseedlingValidator.generic.string.medium.required().label('Profile Pic'),
  skills: Joi.array().items(enseedlingValidator.generic.string.small).required().label('Skills'),
  resume: enseedlingValidator.generic.string.small.required().label('Resume'),
  country: enseedlingValidator.generic.string.small.required().label('Country'),
  state: enseedlingValidator.generic.string.medium.required().label('State'),
  city: enseedlingValidator.generic.string.small.required().label('City'),
  district: enseedlingValidator.generic.string.small.required().label('District'),
  pincode: enseedlingValidator.generic.string.small.required().label('Pincode'),
  landmark: enseedlingValidator.generic.string.any.required().label('Landmark'),
  street: enseedlingValidator.generic.string.medium.label('Street'),
  is_active: enseedlingValidator.generic.boolean.valid(true, false).label('Is Active'),
  title: enseedlingValidator.generic.string.medium.label('Title'),
  prefrences: Joi.array().items(enseedlingValidator.generic.string.small).required().label('Prefrence'),
});

module.exports = {
  validateSignUp,
};
