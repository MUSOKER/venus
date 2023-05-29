const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { categoryValidation } = require('../../validations');
const { categoryServices } = require('../../services');

// fetching all available categories
const fetchAllCategories = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    // check if any category has been created and available
    const categories = await categoryServices.getAllCategories();
    console.log(categories);
    if (!categories) {
      throw error.throwNotFound({ message: 'categories not found' });
    }
    return success.handler(
      { message: 'Categories has been successfully fetched', categories },
      req,
      res,
      next,
    );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// fetching by category id
const fetchCategoryById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    if(!req.params.id){
      throw error.throwNotFound({ message: "id not found" });
    }
    const { id } = await categoryValidation.categoryIdValidation.validateAsync(
      req.params
    );
    const category = await categoryServices.getCategoryById({id});
    if (!category) {
      throw error.throwNotFound({ message: 'category not found' });
    } else { return success.handler({ message: 'Category successfully fetched', category }, req, res, next); }
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// fetching by category name
const fetchCategoryByName = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
  if (!req.query.categoryName) {
       throw error.throwNotFound({ message: "name is required" });
     }
  const {categoryName: name} = await categoryValidation.categoryNameValidation.validateAsync(
      {categoryName: req.query.categoryName}
    );
       // check name exist or not
    const category = await categoryServices.getCategoryByName({name} );
    console.log(category.categoryName)
    if (!category) {
      throw error.throwNotFound({ message: 'category not found' });
    }
    return success.handler(
      { message: 'Category successfully fetched', category },
      req,
      res,
      next,
    );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const deleteCategoryById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { id } = await categoryValidation.categoryIdValidation.validateAsync(
      req.params
    );
    const deleteCategory = await categoryServices.deleteCategoryById({ id });
    if (!deleteCategory) {
      throw error.throwNotFound({ message: "category not found" });
    }
    return success.handler(
      { message: "category has been successfully deleted." },
      req,res,next );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const createCategory = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    // step 1. take all params from category and validate them
    const { categoryName, categoryDescription, categoryVersion } =
      await categoryValidation.addCategoryValidation.validateAsync(req.body);
  // check if category name and version exist 
    const existingCategory = await categoryServices.getCategoryByNameAndVersion({categoryName, categoryVersion } );
     if (existingCategory) {
      throw error.throwConflict({
        message: "Category with the same name and version already exists",
      });
    }
    // create new category
    const newCategory = await categoryServices.createCategory({
      categoryName,
      categoryDescription,
      categoryVersion,
    });
    return success.handler({ newCategory }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
     await transaction.endSession();
  }
};

module.exports = {
  fetchAllCategories,
  fetchCategoryById,
  fetchCategoryByName,
  deleteCategoryById,
  createCategory,
};
