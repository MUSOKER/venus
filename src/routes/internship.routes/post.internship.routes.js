const express = require('express');
const { addinternship, removeInternship, findInternship } = require('../../controllers/internship/post.internship.controller.js');

const postInternshipRoutes = express.Router();

postInternshipRoutes.post('/create', addinternship);
postInternshipRoutes.get('/', findInternship);
postInternshipRoutes.delete('/internshipId', removeInternship);

module.exports = postInternshipRoutes;
