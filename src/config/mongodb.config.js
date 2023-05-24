const mongoose = require('mongoose');

const env = require('./env');

const connectToMongoDb = async () => {
  try {
    mongoose.set('strictQuery', true);
    if (env.NODE_ENV === 'test') {
      await mongoose.connect('mongodb+srv://babarkhan:babar@submgmtsys.nkuwkl3.mongodb.net/?retryWrites=true&w=majority', { useNewurlParser: true, useUnifiedTopology: true });
    } else {
      await mongoose.connect('mongodb+srv://babarkhan:babar@submgmtsys.nkuwkl3.mongodb.net/?retryWrites=true&w=majority', { useNewurlParser: true, useUnifiedTopology: true });
    }
  } catch (error) {
    console.error('Error in connecting to mongodb Atlas', error);
    throw new Error(error);
  }
};

module.exports = {
  connectToMongoDb,
};
//    env.MONGO_URI_TEST
//    env.MONGO_URI
