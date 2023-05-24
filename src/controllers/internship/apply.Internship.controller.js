const { applyInternship, deleteAppliedInternship } = require('../../services/internship.services/apply.internship.services.js');

const applyInternshipController = async (req, res, next) => {
  try {
    const { userId, 
            internshipId, 
            selectionStatus, 
            additionalInformation 
          } = req.body;

// Call the applyInternship service to apply for the internship
    const appliedInternship = await applyInternship({
      userId,
      internshipId,
      selectionStatus,
      additionalInformation
    });

    return res.json({ message: 'Internship application submitted successfully', appliedInternship });
  } catch (error) {
    
    return next(error);
  }
};
const deleteAppliedInternshipController = async(req, res, next) =>{
  try {
    const{ internshipId} = req.params;

    // Call the deleteAppliedInternship service to delete the applied internship
    const deletedInternship = await deleteAppliedInternship (internshipId);
    if (!deletedInternship) {
      return res.status(404).json({ message: 'Applied internship not found' });
    }

    return res.json({ message: 'Applied internship deleted successfully' });

  } catch (error) {
    return next(error);
  }
}

module.exports = {
  applyInternshipController,deleteAppliedInternshipController
};