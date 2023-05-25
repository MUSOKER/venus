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
  category: enseedlingValidations.generic.string.any
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

  // authorImage: enseedlingValidations.generic.string.any
  //   .required()
  //   .label('Author Image'),
  // thumbnail: enseedlingValidations.generic.string.any.label('Thumbnail'),
  // isScheduled: enseedlingValidations.generic.boolean
  // .valid(true, false)
  // .label('Is Scheduled'),
  // scheduledOn: Joi.date().label('Scheduled On'),
  // statuss: enseedlingValidations.generic.number.integer
  //   .valid(ASSIGNMENT_STATUS.PENDING, ASSIGNMENT_STATUS.ASSIGNED, ASSIGNMENT_STATUS.COMPLETED)
  //   .label('Status'),
});

const findAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.medium.required().label('Title'),
  category: enseedlingValidations.generic.string.any.required().label('Category'),
  statuss: enseedlingValidations.generic.string.any.required().label('Statuss'),
  difficultyLevel: enseedlingValidations.generic.string.any.required().label('Difficulty Level'),
  marks: Joi.number().positive().required().label('Marks'),
});

const updateAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.medium.required().label('Title'),
  description: enseedlingValidations.generic.string.any.required().label('Description'),
  requirements: enseedlingValidations.generic.string.any.required().label('Requirements'),
  statuss: enseedlingValidations.generic.string.any.required().label('Statuss'),
  category: enseedlingValidations.generic.string.any.required().label('Category'),
  topics: Joi.array().items(enseedlingValidations.generic.string.small).required().label('Topics'),
  createdBy: enseedlingValidations.generic.string.any.required().label('Created By'),
  difficultyLevel: enseedlingValidations.generic.string.any.required().label('Difficulty Level'),
  deadline: Joi.date().required().label('Deadline'),
  marks: Joi.number().positive().required().label('Marks'),
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
