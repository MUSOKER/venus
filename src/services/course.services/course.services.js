const { CourseModel } = require('../../models');

const getCourses = async ({ courseName, category }) => {
  const filter = { is_Active: true };
  if (courseName) {
    filter.course_name = courseName;
  }
  if (category) {
    filter.category_ids = { $in: category };
  }
  return CourseModel.find(filter);
};

const getCourse = async ({ courseId }) => CourseModel.findById(courseId);
module.exports = {
  getCourses,
  getCourse,
};
