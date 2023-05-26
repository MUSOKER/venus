const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { userServices } = require('../../services');
const { encryption } = require('../../utils');

const fetchUserInfo = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    // fetch user by userId
    const user = await userServices.getUserByUserId({ userId });
    if (!user) {
      throw error.throwNotFound({ message: 'User' });
    }
    // now check user verified or not if user are not verified no need to fetch info
    const encryptedId = await encryption(userId);
    // now fetch user info from identification a model
    const userIdentity = await userServices.getUserByIdFromIdentification({ id: encryptedId });
    if (!userIdentity) {
      throw error.throwNotFound({ message: 'User' });
    }
    if (!userIdentity.is_user_verified) {
      throw error.throwPreconditionFailed({ message: 'User is not verified;' });
    }
    // now fetch userInfo as well as dashboard info
    const [userInfo] = await userServices.getUserInfoByUserId({ userId });
    const [topCandidates] = await userServices.getCandidates();
    // add top candidates into userInfo
    userInfo.topCandidates = topCandidates;
    return success.handler({ userInfo }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  fetchUserInfo,
};
