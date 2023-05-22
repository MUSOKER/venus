const crypto = require('crypto');

const encryption = async ({ payload }) => {
  const hash = crypto.createHash('sha256');
  hash.update(payload);
  return hash.digest('hex');
};

module.exports = encryption;
