<<<<<<< HEAD
const { TopicModel } = require("../../models");
=======
const { topicModel } = require('../../models');
>>>>>>> d400164d1c0f98c59398600677daa2d10a6f082d

// if course exist, create topic
const createTopic = async ({
  topic_name,
  topic_description,
  topic_duration,
  totalVideos,
  topic_info,
  demo_src,
  course_id,
<<<<<<< HEAD
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
=======
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
>>>>>>> d400164d1c0f98c59398600677daa2d10a6f082d

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
<<<<<<< HEAD
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
=======
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
>>>>>>> d400164d1c0f98c59398600677daa2d10a6f082d

module.exports = {
  createTopic,
  deleteTopic,
  getAllTopics,
  updateTopic,
};
