const { PostedInternshipModel } = require('../../models');

const getAllInternship = async () => PostedInternshipModel.find();

const getInternshipById = async ({ id }) => PostedInternshipModel.findById({ id });

const deleteInternship = async ({ id }) => PostedInternshipModel.findByIdAndDelete({ id });

const createInternship = async ({
  internshipTitle, internshipDescription, internshipType, salary, skills, responsibilities, internshipEndDate,
  numberOfOpenings, internshipLocation, experienceLevel,
}, transaction) => {
  const addInternship = new PostedInternshipModel({
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

  const saveInternship = await addInternship.save(transaction);
  return saveInternship;
};

module.exports = {
  createInternship, getAllInternship, deleteInternship, getInternshipById,
};
