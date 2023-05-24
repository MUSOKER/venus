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

module.exports = {
    getUserByEmail,
    createUserIdentification,
    getUserByIdFromIdentification,
    createUser,
};