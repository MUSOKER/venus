const util = require('util');
const Multer = require('multer');

const maxSize = 2 * 1024 * 1024;
const processFile = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: maxSize },
}).single('file');

const processFileService = util.promisify(processFile);

module.exports = { processFileService };
