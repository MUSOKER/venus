const { CategoryModel } = require('../../models');

const getCategoryById = async ({ id }) => await CategoryModel.findById( id );
const getCategory = async ({categoryName}) => {
    const query = {};
    if (categoryName){
      query.categoryName = categoryName;
    };
    return await  CategoryModel.find(query)

};
const deleteCategoryById = async ({ id }) =>
  await CategoryModel.findOneAndDelete({ _id: id });
const checkNameAndVersion = async ({ categoryName, categoryVersion }) => {
  const category = await CategoryModel.findOne({  categoryName,   categoryVersion, });
   return category;
};

const createCategory = async (
  { categoryName, categoryDescription, categoryVersion },
) => await CategoryModel.create({
  categoryName,
  categoryDescription,
  categoryVersion,
});

module.exports = {
 getCategoryById,
 createCategory,
 getCategory,
 deleteCategoryById,
 checkNameAndVersion,
};
