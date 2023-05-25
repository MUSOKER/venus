const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { categoryValidation } = require('../../validations');
const { categoryServices } = require('../../services');

// fetching all available categories
const fetchAllCategories = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    // check if any projects has been created and available
    const categories = await categoryServices.getAllCategories();
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
    const id = await categoryValidation.categoryIdValidation.validateAsync(
      req.params.id,
    );
    // check category exist or not
    const category = await categoryServices.getProjectById({ id });
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
    const name = await categoryValidation.categoryNameValidation.validateAsync(
      req.params.name,
    );
    // check name exist or not
    const category = await categoryServices.getCategoryByName({ name });
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

// Delete by category id
const deleteCategoryById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const id = await categoryValidation.categoryIdValidation.validateAsync(
      req.params.id,
    );
    // check user exits or not
    const category = await categoryServices.deleteCategoryById({ id });
    if (!category) {
      throw error.throwNotFound({ message: 'category not found' });
    }
    return success.handler(
      { message: 'category has been successfully deleted.' },
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

const createCategory = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();

    // step 1. take all params from category and validate them
    const { categoryName, categoryDescription, categoryVersion } = await categoryValidation.addCategoryValidation.validateAsync(req.body);
    // now check category exist with  or not
    // create a category
    const Category = await categoryServices.createCategory({
      categoryName,
      categoryDescription,
      categoryVersion,
    });
    return success.handler({ Category }, req, res, next);
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
