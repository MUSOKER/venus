const express = require('express');

const { uploadFileControllers } = require('../../controllers');

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadFileControllers.fileUpload);
module.exports = uploadRoutes;
