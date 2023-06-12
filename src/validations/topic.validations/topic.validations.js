const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addTopicValidation = Joi.object().keys({
  topic_name: enseedlingValidator.generic.string.any
    .required()
    .label('Topic Name'),
  topic_description: enseedlingValidator.generic.string.any
    .required()
    .label('Topic Description'),
  topic_duration: enseedlingValidator.generic.number.integer
    .required()
    .label('Topic Duration'),
  totalVideos: enseedlingValidator.generic.number.integer
    .required()
    .label('Total Videos'),
  topic_info: enseedlingValidator.generic.string.medium.label('Topic Info'),
  demo_src: enseedlingValidator.generic.string.medium.label('Demo Src'),
  course_id: enseedlingValidator._id.required().label('Course Id'),
});
const getTopicsValidation = Joi.object().keys({
  course_id: enseedlingValidator._id.required().label('Course Id'),
});

const topicIdValidation = Joi.object().keys({
  topic_id: enseedlingValidator._id.required().label('Topic Id'),
});

const updateTopicValidation = Joi.object().keys({
  topic_name: enseedlingValidator.generic.string.any.label('Topic Name'),
  topic_description:
    enseedlingValidator.generic.string.any.label('Topic Description'),
  topic_duration:
    enseedlingValidator.generic.number.integer.label('Topic Duration'),
  totalVideos: enseedlingValidator.generic.number.integer.label('Total Videos'),
  topic_info: enseedlingValidator.generic.string.medium.label('Topic Info'),
  demo_src: enseedlingValidator.generic.string.medium.label('Demo Src'),
  course_id: enseedlingValidator._id.label('Course Id'),
});

module.exports = {
  addTopicValidation,
  getTopicsValidation,
  topicIdValidation,
  updateTopicValidation,
};
