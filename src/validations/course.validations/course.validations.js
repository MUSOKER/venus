const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

<<<<<<< HEAD
const addCourseValidation = Joi.object().keys({
    course_name: enseedlingValidator.generic.string.any.required().label('Course Name'),
    comments: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Comments'),
    course_description: enseedlingValidator.generic.string.any.required().label('Course Description'),
    course_duration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
    course_rating: enseedlingValidator._id.label('Course Rating'),
    course_thumb_image: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
    course_state: enseedlingValidator.generic.string.medium.label('Course State'),
    category_ids: enseedlingValidator._id.required().label('Category'),
    social_media_links: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Social Medial Links'),
    total_videos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
    startDate: Joi.date().required().label('Start Date'),
    endDate: Joi.date().required().label('End Date'),
    capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
    status: enseedlingValidator.generic.string.medium.label('Course Status'),
    createdBy: enseedlingValidator._id.required().label('Created By'),
    instructorId: enseedlingValidator._id.required().label('Insructor'),
    demo_video_src: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
    meta_info: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Meta Info'),
});

const updateCourseValidation = Joi.object().keys({
    course_name: enseedlingValidator.generic.string.any.required().label('Course Name'),
    course_description: enseedlingValidator.generic.string.any.required().label('Course Description'),
    course_duration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
    course_rating: enseedlingValidator._id.label('Course Rating'),
    course_thumb_image: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
    course_state: enseedlingValidator.generic.string.medium.label('Course State'),
    category_ids: enseedlingValidator._id.required().label('Category'),
    social_media_links: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Social Medial Links'),
    total_videos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
    startDate: Joi.date().required().label('Start Date'),
    endDate: Joi.date().required().label('End Date'),
    capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
    status: enseedlingValidator.generic.string.medium.label('Course Status'),
    createdBy: enseedlingValidator._id.required().label('Created By'),
    instructorId: enseedlingValidator._id.required().label('Insructor'),
    demo_video_src: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
    meta_info: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Meta Info'),
=======
const addCoursetValidation = Joi.object().keys({
  course_name: enseedlingValidator.generic.string.any.required().label('Course Name'),
  comments: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Comments'),
  course_description: enseedlingValidator.generic.string.any.required().label('Course Description'),
  course_duration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
  course_rating: enseedlingValidator._id.required().label('Course Rating'),
  course_thumb_image: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
  course_state: enseedlingValidator.generic.string.medium.label('Course State'),
  category_ids: enseedlingValidator._id.required().label('Category'),
  social_media_links: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Social Medial Links'),
  total_videos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
  status: enseedlingValidator.generic.string.medium.label('Course Status'),
  createdBy: enseedlingValidator._id.required().label('Created By'),
  instructorId: enseedlingValidator._id.required().label('Insructor'),
  demo_video_src: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
  meta_info: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Meta Info'),
});

const updateCourseValidation = Joi.object().keys({
  course_name: enseedlingValidator.generic.string.any.required().label('Course Name'),
  course_description: enseedlingValidator.generic.string.any.required().label('Course Description'),
  course_duration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
  course_rating: enseedlingValidator._id.required().label('Course Rating'),
  course_thumb_image: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
  course_state: enseedlingValidator.generic.string.medium.label('Course State'),
  category_ids: enseedlingValidator._id.required().label('Category'),
  social_media_links: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Social Medial Links'),
  total_videos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
  status: enseedlingValidator.generic.string.medium.label('Course Status'),
  createdBy: enseedlingValidator._id.required().label('Created By'),
  instructorId: enseedlingValidator._id.required().label('Insructor'),
  demo_video_src: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
  meta_info: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Meta Info'),
>>>>>>> e0e2b89f8d2df9d3edf72c47a96b002d635b8d80
});

const getCoursesValidation = Joi.object().keys({
  course_name: enseedlingValidator.generic.string.medium.label('Course Name'),
  categoryIds: Joi.array()
    .items(enseedlingValidator._id)
    .label('Category Ids'),
  is_Active: Joi.boolean().label('Is Active'),
});

const courseIdValidation = Joi.object().keys({
<<<<<<< HEAD
    courseId: enseedlingValidator._id.required().label('Course Id'),
});

module.exports = {
    getCoursesValidation,
    courseIdValidation,
    addCourseValidation,
    updateCourseValidation,
};
=======
  courseId: enseedlingValidator._id.required().label('Course Id'),
});

module.exports = {
  getCoursesValidation,
  courseIdValidation,
  addCoursetValidation,
  updateCourseValidation,
};
>>>>>>> e0e2b89f8d2df9d3edf72c47a96b002d635b8d80
