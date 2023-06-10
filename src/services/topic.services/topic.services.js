const { TopicModel } = require("../../models");

//if course exist, create topic
const createTopic = async ({
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
}) =>
  await TopicModel.create({
    topic_name,
    topic_description,
    topic_duration,
    totalVideos,
    topic_info,
    demo_src,
    course_id,
  });

//find all topic by course id
const getAllTopics = async ({ course_id }) => await TopicModel.find({course_id});

//update all fields
const updateTopic = async ({
  topic_id,
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
}) =>
  await TopicModel.findByIdAndUpdate(
    topic_id,
    {
      topic_name,
      topic_description,
      topic_duration,
      totalVideos,
      topic_info,
      demo_src,
      course_id,
    },
    { new: true }
  );

//delete topic
const deleteTopic = async ({ topic_id }) =>
  await TopicModel.findOneAndDelete({ _id: topic_id });

module.exports = {
  createTopic,
  deleteTopic,
  getAllTopics,
  updateTopic,
};
