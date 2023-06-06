
const { applyInternship, deleteInternship, getAppliedInternships } = require('./apply.internship.services');
const {createInternship, getAllInternship , getInternshipById, deleteInternship} = require('./post.internship.services.js')

module.exports = {
  applyInternship, deleteInternship , createInternship , getAllInternship , getInternshipById, deleteInternship};

}

