const Joi = require('joi');
const enseedlingValidator = require('@Enseedling/enseedling-validations');

const appliedInternshipValidation = Joi.object({
  user_id: enseedlingValidator.generic.string.medium.required().label('User ID'),
  internship_id: enseedlingValidator.generic.string.medium.required().label('Internship Id'),
  selection_status: Joi.string()
    .valid('Hired', 'Rejected', 'Shortlisted', 'pending')
    .default('Pending')
    .label('Selection Status'),
  additional_information: Joi.string().allow('').optional().label('Additional Information'),
});

module.exports = {
  appliedInternshipValidation,
};
