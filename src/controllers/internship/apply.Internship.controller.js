const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { internshipService, userServices } = require('../../services');
const { internshipValidation } = require('../../validations');
const { Transaction } = require('../../utils');

const applyInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      userId,
      internshipId,
      selectionStatus,
      additionalInformation,
    } = await internshipValidation.appliedInternshipValidation.validateAsync.req.body;

    // Use the getUserId function to retrieve the actual user ID from the provided ID
    const actualUser = await userServices.getUserId(userId);

    // Call the applyInternship service to apply for the internship
    const Internship = await internshipService.applyInternship({
      userId: actualUser,
      internshipId,
      selectionStatus,
      additionalInformation,
    });

    return success.handler({ Internship }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  }
};
const deleteInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { internshipId } = await internshipValidation.appliedInternshipValidation.validateAsync.req.params;

    // Call the deleteInternship service to delete the applied internship
    const deletedInternship = await internshipService.deleteInternship(internshipId);
    if (!deletedInternship) {
      return success.handler({ message: 'internship not found' });
    }
    return success.handler({ message: 'Applied internship deleted successfully' }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return next(error);
  }
};

module.exports = {
  applyInternship, deleteInternship,
};
