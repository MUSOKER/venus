const jwt = require('jsonwebtoken');
const { environmentVariables } = require('../config');

const createToken = async ({ userId, whitelabelId, role }) => jwt.sign({ userId, whitelabelId, role }, environmentVariables.JWT_SECRET_KEY, { expiresIn: '24h' });
const verifyToken = async ({ token }) => jwt.verify(token, environmentVariables.JWT_SECRET_KEY);

module.exports = {
  createToken,
  verifyToken,
};
