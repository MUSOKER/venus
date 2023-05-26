const enseedlingValidations = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const createUpdateFeedbackVal = Joi.object().keys({
  comment: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .required()
    .label('Comment'),
  rating: enseedlingValidations.generic.number.integer
    .min(1)
    .max(5)
    .required()
    .label('Review'),
  like: enseedlingValidations.generic.boolean
    .valid(true, false)
    .required()
    .label('Like'),
});

const feedbackIdValidation = Joi.object().keys({
  feedbackId: enseedlingValidations._id.required().label('Feedback Id'),
});

module.exports = {
  createUpdateFeedbackVal,
  feedbackIdValidation,
};
