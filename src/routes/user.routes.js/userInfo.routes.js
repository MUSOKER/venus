const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { userControllers } = require('../../controllers');

const userInfoRoutes = express.Router();

userInfoRoutes.get('/user-info', authentication, userControllers.fetchUserInfo);

module.exports = {
  userInfoRoutes,
};
