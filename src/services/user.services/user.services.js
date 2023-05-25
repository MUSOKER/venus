const { UserModel, UserIndentificationSchema } = require('../../models');

const getUserByEmail = async({ email }) => UserModel.findOne({ email });

const getUserByIdFromIdentification = async({ id }) => UserIndentificationSchema.findOne({ id });

// create user
const createUser = async({ fullName, email }, transaction) => {
    const addUser = new UserModel({
        fullName,
        email,
    });
    const saveUser = await addUser.save({ transaction });
    return saveUser;
};

// create user identification
const createUserIdentification = async({ isUserVerified, id }, transaction) => {
    const addUserIdentification = new UserIndentificationSchema({
        is_user_verified: isUserVerified,
        id,
    });
    const saveUserIdentification = await addUserIdentification.save({ transaction });
    return saveUserIdentification;

}

// get user by userId
const getUserByUserId = async ({ userId }) => UserModel.findById(userId).populate('addressId');

module.exports = {
<<<<<<< HEAD
    getUserByEmail,
    createUserIdentification,
    getUserByIdFromIdentification,
    createUser,
};
=======
  getUserByEmail,
  createUserIdentification,
  getUserByIdFromIdentification,
  createUser,
  getUserByUserId,
};
>>>>>>> 70b7eb8a08baf5052f17130e13cb9562da258188
