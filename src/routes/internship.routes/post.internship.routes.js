const express = require("express");
const { postInternshipController } = require('../../controllers/internship/post.internship.controller.js');

const postInternship = express.Router();

postInternship.post("/internship", postInternshipController);

module.exports = postInternship;
