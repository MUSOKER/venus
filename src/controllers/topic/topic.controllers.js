const { success, error } = require("@Enseedling/enseedling-lib-handler");
const { Transaction } = require("../../utils");
const { topicValidation } = require("../../validations");
const { topicServices } = require("../../services");


const getAllTopics = async (req, res, next) => {
  try {
    const { course_id } =
      await topicValidation.getTopicsValidation.validateAsync(req.params);
    const topics = await topicServices.getAllTopics({
      course_id,
    });
    return success.handler({ topics }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const deleteTopic = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { id } = await topicValidation.topicIdValidation.validateAsync(
      req.params
    );
    const deleteTopic = await topicServices.deleteTopic({ id });
    if (!deleteTopic) {
      throw error.throwNotFound({ message: "topic not found" });
    }
    return success.handler(
      { message: "topic has been successfully deleted." },
      req,
      res,
      next
    );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const createTopic = async (req, res, next) => {
  const transaction = await transaction.startTransaction();
  try {
    await transaction.startTransaction();
    const {
      topic_name,
      topic_description,
      topic_duration,
      totalVideos,
      topic_info,
      demo_src,
      course_id,
    } = await topicValidation.addTopicValidation.validateAsync(req.query);
    const topic = await topicServices.createTopic(
      {
        topic_name,
        topic_description,
        topic_duration,
        totalVideos,
        topic_info,
        demo_src,
        course_id,
      },
      transaction
    );
    return success.handler({ topic }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateTopic = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      topic_id,
      topic_name,
      topic_description,
      topic_duration,
      totalVideos,
      topic_info,
      demo_src,
      course_id,
    } = await topicValidation.updateTopicValidation.validateAsync(req.body);
    const { topicId } =
      await projectValidation.projectIdValidation.validateAsync(req.params);
    await topicServices.updateTopic({
      topicId,
      topic_name,
      topic_description,
      topic_duration,
      totalVideos,
      topic_info,
      demo_src,
      course_id,
    });
    return success.handler({ message: "topic updated" }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};



module.exports = {
  deleteTopic,
  createTopic,
  updateTopic,
  getAllTopics,
};
