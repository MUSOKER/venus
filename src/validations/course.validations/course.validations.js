const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');
const { PROJECT_STATUS } = require('../../const');
const { PROJECT_VISIBILITY } = require('../../const');

const addCoursetValidation = Joi.object().keys({
    course_name: enseedlingValidator.generic.string.any.required().label('Course Name'),
    comments: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Comments'),
    course_description: enseedlingValidator.generic.string.any.required().label('Course Description'),
    course_duration: enseedlingValidator.generic.number.required().label('Course Duration'),
    course_rating: enseedlingValidator._id.required().label('Course Rating'),
    course_thumb_image: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
    course_state: enseedlingValidator.generic.string.medium.label('Course State'),
    category_ids: enseedlingValidator._id.required().label('Category'),
    social_media_links: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Social Medial Links'),
    total_videos: enseedlingValidator.generic.number.label('Total Video'),
    startDate: Joi.date().required().label('Start Date'),
    endDate: Joi.date().required().label('End Date'),
    capacity: enseedlingValidator.generic.number.required().label('Capacity'),
    status: enseedlingValidator.generic.string.medium.label('Course Status'),
    createdBy: enseedlingValidator._id.required().label('Created By'),
    instructorId: enseedlingValidator._id.required().label('Insructor'),
    demo_video_src: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
    meta_info: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Meta Info'),
});

const updateCourseValidation = Joi.object().keys({
    comments: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Comments'),
    visibility: enseedlingValidator.generic.number.integer.valid(PROJECT_VISIBILITY.public, PROJECT_VISIBILITY.private).label('Visibility'),
    startDate: Joi.date().label('Start Date'),
    endDate: Joi.date().label('End Date'),
    projectTitle: enseedlingValidator.generic.string.any.label('Project Title'),
    projectDescription: enseedlingValidator.generic.string.any.label('Project Description'),
    projectLink: enseedlingValidator.generic.string.medium.label('Project Link'),
    projectImage: enseedlingValidator.generic.string.medium.label('Project Image'),
    projectMilestone: enseedlingValidator.generic.string.medium.label('Project Milestone'),
    status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do).label('Status'),
    categoryIds: enseedlingValidator._id.label('Category'),
    userId: enseedlingValidator._id.label('User Id'),
});

const getCoursesValidation = Joi.object().keys({
    course_name: enseedlingValidator.generic.string.medium.label('Course Name'),
    categoryIds: Joi.array()
        .items(enseedlingValidator._id)
        .label('Category Ids'),
    is_Active: Joi.boolean().label('Is Active')
});

const courseIdValidation = Joi.object().keys({
    projectId: enseedlingValidator._id.required().label('Course Id'),
});

module.exports = {
    getCoursesValidation,
    courseIdValidation,
    addCoursetValidation,
    updateCourseValidation,
};