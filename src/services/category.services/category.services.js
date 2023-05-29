const { CategoryModel } = require('../../models');

const getCategoryById = async ({ id }) => await CategoryModel.findById( id );

const getCategory = async ({categoryName}) => {
    const query = {};
    if (categoryName){
      query.categoryName = categoryName;
    };
    return await  CategoryModel.find(query)

};
const deleteCategoryById = async ({ id }) => await CategoryModel.deleteOne({ _id: id });
  
const getCategoryByNameAndVersion = async ({
  categoryName,
  categoryVersion,
}) => {
  const category = await CategoryModel.findOne({
    categoryName,
    categoryVersion,
    });
  console.log("data from database:", category)
  return category;
};

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
 createCategory,
 getCategory,
 deleteCategoryById,
 getCategoryByNameAndVersion,
};
