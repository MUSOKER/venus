const express = require("express");
const { error } = require("@Enseedling/enseedling-lib-handler");
const { getTopicRoutes } = require("./get.topic.route");
const { deleteTopicRoutes } = require("./delete.topic.route");
const { createTopicRoutes } = require("./create.topic.route");
const { updateTopicRoutes } = require("./update.topic.route");

const topicRoutes = express.Router();

topicRoutes.use(getTopicRoutes);
topicRoutes.use(deleteTopicRoutes);
topicRoutes.use(createTopicRoutes);
topicRoutes.use(updateTopicRoutes);
topicRoutes.use("*", () => error.throwNotFound({ item: "Route" }));

module.exports = topicRoutes;
