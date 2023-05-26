const enseedlingValidations = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.medium.required().label('Title'),
  description: enseedlingValidations.generic.string.any
    .required()
    .label('Description'),
  requirements: enseedlingValidations.generic.string.any
    .required()
    .label('Requirements'),
  statuss: enseedlingValidations.generic.string.any
    .required()
    .label('Statuss'),
  category: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .required()
    .label('Category'),
  topics: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .required()
    .label('Topics'),
  createdBy: enseedlingValidations.generic.string.any
    .required()
    .label('Created By'),
  difficultyLevel: enseedlingValidations.generic.string.any
    .required()
    .label('Difficulty Level'),
  deadline: Joi.date().required().label('Deadline'),
  marks: Joi.number().positive().required().label('Marks'),
});

const findAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.medium.label('Title'),
  category: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .label('Category'),
  statuss: enseedlingValidations.generic.string.any.label('Statuss'),
  difficultyLevel: enseedlingValidations.generic.string.any.label('Difficulty Level'),
  marks: Joi.number().positive().label('Marks'),

});

const updateAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.medium.label('Title'),
  description: enseedlingValidations.generic.string.any.label('Description'),
  requirements: enseedlingValidations.generic.string.any.label('Requirements'),
  statuss: enseedlingValidations.generic.string.any.label('Statuss'),
  category: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .label('Category'),
  topics: Joi.array().items(enseedlingValidations.generic.string.small).label('Topics'),
  createdBy: enseedlingValidations.generic.string.any.label('Created By'),
  difficultyLevel: enseedlingValidations.generic.string.any.label('Difficulty Level'),
  deadline: Joi.date().label('Deadline'),
  marks: Joi.number().positive().label('Marks'),
});

const assignmentIdValidation = Joi.object().keys({
  assignmentId: enseedlingValidations._id.required().label('Assignment Id'),
});

module.exports = {
  addAssignmentValidation,
  findAssignmentValidation,
  updateAssignmentValidation,
  assignmentIdValidation,
};
