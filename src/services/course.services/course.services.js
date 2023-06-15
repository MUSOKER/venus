const { CourseModel } = require('../../models');

const createCourse = async ({
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
}) => CourseModel.create({
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
});

const updateTheCourse = async ({
  courseId,
  course_name,
  course_description,
  course_duration,
  course_rating,
  course_thumb_image,
  category_ids,
  social_media_links,
  total_videos,
  startDate,
  endDate,
  capacity,
  createdBy,
  instructorId,
  demo_video_src,
  meta_info,
}) => CourseModel.findByIdAndUpdate(courseId, {
  course_name,
  course_description,
  course_duration,
  course_rating,
  course_thumb_image,
  category_ids,
  social_media_links,
  total_videos,
  startDate,
  endDate,
  capacity,
  createdBy,
  instructorId,
  demo_video_src,
  meta_info,
}, { returnedDocument: 'after' });

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
  createCourse,
  updateTheCourse,
};
