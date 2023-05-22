const environmentVariables = require('./env');
const { connectToMongoDb } = require('./mongodb.config');
const gcpClient = require('./gcp.config');

module.exports = {
  environmentVariables,
  connectToMongoDb,
  gcpClient,
};
