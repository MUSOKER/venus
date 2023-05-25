const { CategoryModel } = require('../../models');

const getCategoryById = async ({ id }) => CategoryModel.findOne({ id });
const getCategoryByName = async ({ name }) => CategoryModel.findOne({ name });
const getAllCategories = async () => CategoryModel.find();
const deleteCategoryById = async ({ id }) => CategoryModel.deleteOne(id);
const getCategoryByNameAndVersion = async ({ categoryName, categoryVersion }) => CategoryModel.find({ categoryName, categoryVersion });

// create category
const createCategory = async (
  { categoryName, categoryDescription, categoryVersion },
) => CategoryModel.create({
  categoryName,
  categoryDescription,
  categoryVersion,
});

module.exports = {
  getCategoryById,
  getCategoryByName,
  createCategory,
  getAllCategories,
  deleteCategoryById,
  getCategoryByNameAndVersion,
};
