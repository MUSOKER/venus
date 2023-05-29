const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { internshipValidation } = require('../../validations');
const { internshipServices } = require('../../services');
const { Transaction } = require('../../utils');

const addinternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
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
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  }
};

const findInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const allInternships = await internshipServices.getAllInternship();
    return success.handler({ allInternships }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
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
