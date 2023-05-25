const { error, success } = require('@Enseedling/enseedling-lib-handler');

const { courseValidation } = require('../../validations');

const { courseServices } = require('../../services');

const findCourses = async (req, res, next) => {
  try {
    const { courseName, category } = await courseValidation.getCoursesValidation.validateAsync(req.query);
    /**
     * pass query parameters to service to filter data
     */
    const courses = await courseServices.getcourses({
      courseName, category,
    });
    return success.handler({ courses }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findCourse = async (req, res, next) => {
  try {
    const courseId = await courseValidation.courseIdValidation.validateAsync(req.params);
    const course = await courseServices.getCourse(courseId);
    if (!course) {
      throw error.throwNotFound({ message: 'Course' });
    }
    return success.handler({ course }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  findCourses,
  findCourse,
};
