const express = require('express');

const { uploadControllers } = require('../../controllers');

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadControllers.fileUpload);
module.exports = uploadRoutes;
