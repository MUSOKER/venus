const { AppliedInternshipSchema, PostedInternshipModel, AppliedInternshipModel} = require("../../models");

//Get posted Id
const getPostedInternshipModel = async ({ id }) => PostedInternshipModel.findOne({ id });

const getPostedInternshipById = async ({ id }) => AppliedInternshipSchema.findOne({ id });

// apply internship

const applyInternship = async(
  {
  userId,
  internshipId,
  selectionStatus,
  additionalInformation

  }, 
  transaction
) => {
  const applyInternship = new applyInternship({
    userId,
    internshipId,
    selectionStatus,
    additionalInformation
  });
  const saveInternship = await applyInternship.save({ transaction });
  return saveInternship;
};
//delete
const deleteAppliedInternship = async ({id}) =>AppliedInternshipModel.findByIdAndDelete({id})


module.exports = {applyInternship, deleteAppliedInternship};