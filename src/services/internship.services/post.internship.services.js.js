const { PostedInternshipSchema, CategoryModel } = require("../../models");

//Get category Id
const categoryId = async ({ id }) => CategoryModel.findOne({ id });

const getInternshipById = async ({ id }) => PostedInternshipSchema.findOne({ id });




// Create Internship
const createInternship = async (
  {
    categoryId,
    internshipTitle,
    internshipDescription,
    internshipType,
    salary,
    skills,
    responsibilities,
    qualification,
    internshipEndDate,
    internshipStatus,
    internshipLocation,
    experienceLevel,
  },
  transaction
) => {
  const addInternship = new PostedInternshipSchema({
    categoryId,
    internshipTitle,
    internshipDescription,
    internshipType,
    salary,
    skills,
    responsibilities,
    qualification,
    internshipEndDate,
    internshipStatus,
    internshipLocation,
    experienceLevel,
  });

  const saveInternship = await addInternship.save({ transaction });
  return saveInternship;
};



module.exports = { createInternship };
