const { applyInternship, deleteAppliedInternship } = require('./apply.internship.services.js');
const {createInternship} = require('./post.internship.services.js');


module.exports = {createInternship, applyInternship, deleteAppliedInternship}