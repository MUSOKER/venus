const express = require('express');
const { internshipController } = require('../../controllers');

const postInternshipRoutes = express.Router();

postInternshipRoutes.get('/', internshipController.findInternship);
postInternshipRoutes.post('/create', internshipController.addinternship);
postInternshipRoutes.delete('/:internshipId', internshipController.removeInternship);

module.exports = {
  postInternshipRoutes,
};
