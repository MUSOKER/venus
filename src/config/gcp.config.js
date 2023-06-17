const { Storage } = require('@google-cloud/storage');
const path = require('path');

const { project_id: projectId } = require('./venus-intern-33c818726701.json');

const filePath = path.join(__dirname, './venus-intern-33c818726701.json');

// create client
const storage = new Storage({ keyFilename: filePath, projectId });

module.exports = {
  storage,
};
