const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addProjectValidation = Joi.object().keys({
  comments: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Comments'),
  visibility: enseedlingValidator.generic.string.medium.required().label('Visibility'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  projectTitle: enseedlingValidator.generic.string.any.required().label('Project Title'),
  projectDescription: enseedlingValidator.generic.string.any.required().label('Project Description'),
  projectLink: enseedlingValidator.generic.string.medium.required().label('Project Link'),
  projectImage: enseedlingValidator.generic.string.medium.label('Project Image'),
  projectMilestone: enseedlingValidator.generic.string.medium.label('Project Milestone'),
  status: enseedlingValidator.generic.string.small.required().label('Status'),
  category: enseedlingValidator._id.required().label('Category'),
  userId: enseedlingValidator._id.required().label('User Id'),
});

module.exports = {
  addProjectValidation,
};
// publicationStatus: enseedlingValidations.generic.number.integer
//     .valid(BLOGS_STATUS.DRAFT, BLOGS_STATUS.LIVE, BLOGS_STATUS.UNLIVE)
//     .label('Publication Status'),
