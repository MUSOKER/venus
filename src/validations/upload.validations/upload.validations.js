const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const attachmentValidator = Joi.object().keys({
  name: enseedlingValidator.generic.string.any.required().label('File Name'),
  id: enseedlingValidator.generic.string.any.required().label('File'),
  attachment: Joi.array().items(Joi.object({
    url: Joi.string().required(),
    type: Joi.string().required(),
    name: Joi.string().required(),
  })),
});

module.exports = {
  attachmentValidator,
};
