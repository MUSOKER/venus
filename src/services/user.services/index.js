const {
    getUserByEmail,
    getUserByIdFromIdentification,
    createUser,
    createUserIdentification,
    getUserByUserId,
} = require('./user.services');

module.exports = {
    getUserByEmail,
    getUserByUserId,
    createUser,
    createUserIdentification,
    getUserByIdFromIdentification,
};