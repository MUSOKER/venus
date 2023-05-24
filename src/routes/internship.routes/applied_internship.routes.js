const express = require('express');
const { internshipControllers } = require('../../controllers');

const applyInternshipRoutes = express.Router();

applyInternshipRoutes.post('applyinternship', internshipControllers.applyInternship)

module.exports = {
    applyInternshipRoutes,
  };
  