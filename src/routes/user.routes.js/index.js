const express = require('express');
// const { header } = require('@Translense-Private-Limited/odriyo-lib-middlewares');
const { error } = require('@Enseedling/enseedling-lib-handler');
const { userSignUpRoutes } = require('./register.user.routes');
const { userLogInRoutes } = require('./login.user.routes');

const userRoutes = express.Router();

userRoutes.use(userSignUpRoutes);
userRoutes.use(userLogInRoutes);
userRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = userRoutes;
