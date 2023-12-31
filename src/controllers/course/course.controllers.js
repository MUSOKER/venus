const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { courseValidation } = require('../../validations');

const { courseServices } = require('../../services');
const createCourse = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const {
            course_name,
            comments,
            course_description,
            course_duration,
            course_rating,
            course_thumb_image,
            course_state,
            category_ids,
            social_media_links,
            total_videos,
            startDate,
            endDate,
            capacity,
            status,
            createdBy,
            instructorId,
            demo_video_src,
            meta_info
        } = await courseValidation.addCourseValidation.validateAsync(req.body);
        const course = await courseServices.createCourse({
            course_name,
            comments,
            course_description,
            course_duration,
            course_rating,
            course_thumb_image,
            course_state,
            category_ids,
            social_media_links,
            total_videos,
            startDate,
            endDate,
            capacity,
            status,
            createdBy,
            instructorId,
            demo_video_src,
            meta_info,
        }, transaction);
        return success.handler({ course }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};
// Update course by Id
const updateCourse = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const {
            course_name,
            // comments,
            course_description,
            course_duration,
            course_rating,
            course_thumb_image,
            course_state,
            category_ids,
            social_media_links,
            total_videos,
            startDate,
            endDate,
            capacity,
            status,
            createdBy,
            instructorId,
            demo_video_src,
            meta_info
        } = await courseValidation.updateCourseValidation.validateAsync(req.body);
        const course = await courseServices.updateTheCourse({
            course_name,
            course_description,
            course_duration,
            course_rating,
            course_thumb_image,
            course_state,
            category_ids,
            social_media_links,
            total_videos,
            startDate,
            endDate,
            capacity,
            status,
            createdBy,
            instructorId,
            demo_video_src,
            meta_info,
        });
        return success.handler({ message: 'course updated', course }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};

const findCourses = async(req, res, next) => {
    try {
        const { courseId, courseName, category } = await courseValidation.getCoursesValidation.validateAsync(req.params);
        /**
         * pass query parameters to service to filter data
         */
        const courses = await courseServices.getCourses({
            courseId,
            courseName,
            category,
        });
        return success.handler({ courses }, req, res, next);
    } catch (err) {
        return error.handler(err, req, res, next);
    }

};

module.exports = {
    findCourses,
    updateCourse,
    createCourse,
};