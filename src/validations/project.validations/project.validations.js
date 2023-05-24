const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');
const { PROJECT_STATUS } = require('../../const');
const { PROJECT_VISIBILITY } = require('../../const');

const addProjectValidation = Joi.object().keys({
    comments: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Comments'),
    visibility: enseedlingValidator.generic.number.integer.valid(PROJECT_VISIBILITY.public, PROJECT_VISIBILITY.private).label('Visibility'),
    startDate: Joi.date().required().label('Start Date'),
    endDate: Joi.date().required().label('End Date'),
    projectTitle: enseedlingValidator.generic.string.any.required().label('Project Title'),
    projectDescription: enseedlingValidator.generic.string.any.required().label('Project Description'),
    projectLink: enseedlingValidator.generic.string.medium.required().label('Project Link'),
    projectImage: enseedlingValidator.generic.string.medium.label('Project Image'),
    projectMilestone: enseedlingValidator.generic.string.medium.label('Project Milestone'),
    status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do).label('Status'),
    category_ids: enseedlingValidator._id.required().label('Category'),
    userId: enseedlingValidator._id.required().label('User Id'),
});
const projectTitleValidation = Joi.object().keys({
    title: enseedlingValidator.generic.string.any.required()
});
const projectIdValidations = Joi.object().keys({
    id: enseedlingValidator._id.required()
});
const userIdValidation = Joi.object().keys({
    userId: enseedlingValidator._id.required()
});
const projectStatusValidation = Joi.object().keys({
    status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do)
});

module.exports = {
    addProjectValidation,
    projectTitleValidation,
    projectIdValidations,
    userIdValidation,
    projectStatusValidation,
};