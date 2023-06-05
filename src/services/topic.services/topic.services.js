const { topicModel } = require('../../models');

// if course exist, create topic
const createTopic = async ({
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
}) => topicModel.create({
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
});

// find all topic by course id
const getAllTopics = async ({ course_id }) => topicModel.find(course_id);

// update all fields
const updateTopic = async ({
  topic_id,
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
}) => topicModel.findByIdAndUpdate(
  {
    topic_id,
    topic_name,
    topic_description,
    topic_duration,
    totalVideos,
    topic_info,
    demo_src,
    course_id,
  },
  { returnedDocument: 'after' },
);

// delete topic
const deleteTopic = async ({ id }) => topicModel.deleteOne({ _id: id });

module.exports = {
  createTopic,
  deleteTopic,
  getAllTopics,
  updateTopic,
};
