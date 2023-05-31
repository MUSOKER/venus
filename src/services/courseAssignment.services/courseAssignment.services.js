const { CourseAssignmentModel } = require('../../models');

const createCourseAssignment = async ({
  courseID,
  assignmentId,
  status,
  courseCompletition,
}, transaction) => {
  const CourseAssignment = new CourseAssignmentModel({
    courseID,
    assignmentId,
    status,
    courseCompletition,
  });
  const saveCourseAssignment = await CourseAssignment.save({ transaction });
  return saveCourseAssignment;
};

const getCourseAssignment = async ({
  status,
  courseCompletition,
}) => {
  const query = {};
  if (status) {
    query.status = status;
  }
  if (courseCompletition) {
    query.statuss = courseCompletition;
  }
  return CourseAssignmentModel.find(query);
};

const updateTheCourseAssignment = async ({
  courseAssignmentId,
  status,
  courseCompletition,
}) => CourseAssignmentModel.findByIdAndUpdate(courseAssignmentId, {
  status,
  courseCompletition,
});

const deleteCourseAssignment = async (courseAssignmentId) => CourseAssignmentModel.findByIdAndDelete(courseAssignmentId);

module.exports = {
  createCourseAssignment,
  getCourseAssignment,
  deleteCourseAssignment,
  updateTheCourseAssignment,
};
