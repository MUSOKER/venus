const express = require("express");
const { topicControllers } = require("../../controllers");

const getTopicRoutes = express.Router();

getTopicRoutes.get("/:courseId", topicControllers.getAllTopics);


module.exports = {
  getTopicRoutes,
};
