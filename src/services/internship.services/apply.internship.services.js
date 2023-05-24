const { AppliedInternshipSchema, PostedInternshipModel, AppliedInternshipModel } = require('../../models');

// Get posted internship by ID
const getPostedInternshipById = async ({ id }) => PostedInternshipModel.findOne({ id });

// Get applied internship by ID
const getAppliedInternshipById = async ({ id }) => AppliedInternshipModel.findOne({ id });

// Apply internship
const applyInternship = async (
  {
    userId,
    internshipId,
    selectionStatus,
    additionalInformation,
  },
  transaction,
) => {
  const appliedInternship = new AppliedInternshipSchema({
    userId,
    internshipId,
    selectionStatus,
    additionalInformation,
  });
  const saveInternship = await appliedInternship.save({ transaction });
  return saveInternship;
};

// Delete applied internship
const deleteAppliedInternship = async ({ id }) => AppliedInternshipModel.findByIdAndDelete(id);

module.exports = {
  applyInternship, deleteAppliedInternship, getPostedInternshipById, getAppliedInternshipById,
};
