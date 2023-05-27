const Joi = require('joi');
const enseedlingValidator = require('@Enseedling/enseedling-validations');

const postedInternshipValidation = Joi.object({
  internshipTitle: enseedlingValidator.generic.string
    .required()
    .label('Internship Title'),
  internshipDescription: enseedlingValidator.generic.string
    .required()
    .label('Internship Description'),
  internshipType: enseedlingValidator.generic.string
    .required()
    .label('Internship Type'),
  salary: enseedlingValidator.generic.string.required().label('Salary'),
  skills: enseedlingValidator.generic.array
    .required()
    .items(enseedlingValidator.generic.string)
    .label('Skills'),
  responsibilities: enseedlingValidator.generic.array
    .required()
    .items(enseedlingValidator.generic.string)
    .label('Responsibilities'),
  qualification: enseedlingValidator.generic.string
    .required()
    .label('Qualification'),
  internshipEndDate: enseedlingValidator.generic.date
    .required()
    .label('Internship End Date'),
  numberOfOpenings: enseedlingValidator.generic.number
    .required()
    .integer()
    .default(1)
    .label('Number of Openings'),
  internshipStatus: enseedlingValidator.generic.string
    .required()
    .valid('Active', 'Inactive')
    .default('Active')
    .label('Internship Status'),
  internshipLocation: enseedlingValidator.generic.string
    .required()
    .default('Point')
    .label('Internship Location'),
  experienceLevel: enseedlingValidator.generic.string
    .required()
    .valid('Entry Level', 'Junior Level', 'Mid Level', 'Senior Level')
    .label('Experience Level'),
  ApprovedAt: enseedlingValidator.generic.date.required().label('Approved At'),
  approvedBy: enseedlingValidator.generic.string
    .required()
    .label('Approved By'),
  status: enseedlingValidator.generic.string
    .required()
    .valid('Approved', 'Rejected', 'Pending')
    .default('Pending')
    .label('Status'),
});

module.exports = {
  postedInternshipValidation,
};
