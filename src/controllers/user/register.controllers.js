// const { success, error } = require('@Enseedling/enseedling-lib-handler');
// const { Transaction, jwt } = require('../../utils');

// const registerUser = async (req, res, next) => {
//   const transaction = await Transaction.startSession();
//   try {
//     await transaction.startTransaction();
//     // step 1. take all params from user and validate them
//     const { } = await ;
//     // commit all changes
//     await transaction.commitTransaction();
//     return success.handler({ user }, req, res, next);
//   } catch (err) {
//     await transaction.abortTransaction();
//     return error.handler(err, req, res, next);
//   } finally {
//     await transaction.endSession();
//   }
// };

// module.exports = {
//   registerUser,
// };
