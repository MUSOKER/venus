const express = require('express');
const { deleteAppliedInternshipController, applyInternshipController } = require('../../controllers/internship/apply.Internship.controller.js');
const internshipRoutes = require('./index.js');

const applyInternshipRoute = express.Router();
const deleteAppliedInternshipRoute = express.Router();

internshipRoutes.post("/applyinternship", applyInternshipController)
internshipRoutes.delete("/delete", deleteAppliedInternshipController)
module.exports = {applyInternshipRoute, deleteAppliedInternshipRoute}
  