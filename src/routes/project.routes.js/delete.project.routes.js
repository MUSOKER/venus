const express = require('express');
const { projectControllers } = require('../../controllers');

const deleteProjectRoutes = express.Router();
deleteProjectRoutes.delete('/delete_project', projectControllers.deleteProjectById);

module.exports = {
    deleteProjectRoutes,
};