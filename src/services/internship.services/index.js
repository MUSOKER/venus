const { applyInternship, deleteAppliedInternship } = require('./apply.internship.services');
const {createInternship, getAllInternship , getInternshipById, deleteInternship} = require('./post.internship.services.js')

module.exports = {
  applyInternship, deleteAppliedInternship , createInternship , getAllInternship , getInternshipById, deleteInternship};
