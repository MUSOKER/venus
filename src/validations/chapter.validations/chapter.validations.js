const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const createChapterValidation = Joi.object().keys({
    chapter_name: enseedlingValidator.generic.string.any.required().label('Chapter Name'),
    module_id: enseedlingValidator._id.required().label('Module'),
    chapter_description: enseedlingValidator.generic.string.any.required().label('Chapter Description'),
    video_src: enseedlingValidator.generic.string.medium.required().label('Chapter Video src'),
    duration: enseedlingValidator.generic.number.integer.required().label('Chapter Duration'),
    comments: Joi.array()
        .items(enseedlingValidator.generic.string.any)
        .label('Comments'),

});

const updateChapterValidation = Joi.object().keys({
    chapter_name: enseedlingValidator.generic.string.any.required().label('Chapter Name'),
    module_id: enseedlingValidator._id.required().label('Module'),
    chapter_description: enseedlingValidator.generic.string.any.required().label('Chapter Description'),
    video_src: enseedlingValidator.generic.string.medium.required().label('Chapter Video src'),
    duration: enseedlingValidator.generic.number.integer.required().label('Chapter Duration'),
});

const getChapterValidation = Joi.object().keys({
    chapterId: enseedlingValidator._id.label('Chapter Id'),
    moduleId: enseedlingValidator._id.label('Module Id')
});

const chapterIdValidation = Joi.object().keys({
    chapterId: enseedlingValidator._id.required().label('Chapter Id'),
});

module.exports = {
    chapterIdValidation,
    getChapterValidation,
    updateChapterValidation,
    createChapterValidation
};