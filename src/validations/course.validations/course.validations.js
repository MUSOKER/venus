const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');


const getCoursesValidation = Joi.object().keys({
 course_name: enseedlingValidator.generic.string.medium.label('Course Name'),
 categoryIds:  Joi.array()
    .items( enseedlingValidator._id)
    .label('Category Ids'),
    is_Active : Joi.boolean().label('Is Active')
});

const courseIdValidation = Joi.object().keys({
  projectId: enseedlingValidator._id.required().label('Course Id'),
});

module.exports = {
  getCoursesValidation,
  courseIdValidation ,
};
