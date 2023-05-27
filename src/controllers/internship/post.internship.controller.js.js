const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { internshipValidation } = require('../../validations');
const { internshipServices } = require('../../services');

const addinternship = async (req, res, next) => {
  try {
    const {
      internshipTitle,
      internshipDescription,
      internshipType,
      salary,
      skills,
      responsibilities,
      internshipEndDate,
      numberOfOpenings,
      internshipLocation,
      experienceLevel,
    } = await internshipValidation.postedInternshipValidation.validateAsync(req.body);
    // Insert into DB
    const internship = await internshipServices.createInternship({
      internshipTitle,
      internshipDescription,
      internshipType,
      salary,
      skills,
      responsibilities,
      internshipEndDate,
      numberOfOpenings,
      internshipLocation,
      experienceLevel,

    });
    return success.handler({ internship }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findInternship = async (req, res, next) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const AllInternship = await internshipServices.getAllInternship()
      .limit(limit * 1).skip((page - 1) * limit).exec();

    const doc = await internshipServices.getAllInternship.countDocuments();

    return success.handler({ AllInternship, totalPages: Math.ceil(doc / limit), currentPage: page }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeInternship = async (req, res, next) => {
  try {
    const internshipId = await internshipValidation.postedInternshipValidation.validateAsync(req.params);
    const deletedIntership = await internshipServices.getInternshipById({ internshipId });
    return success.handler({ deletedIntership }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = { addinternship, findInternship, removeInternship };
