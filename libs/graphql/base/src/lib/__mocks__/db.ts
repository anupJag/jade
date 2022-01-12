const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const mongo = new MongoMemoryServer();

const connectDB = async function () {
  try {
    const mongoDBURL = await mongo.getUri();

    await mongoose.connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log('mock db error ', e);
  }
};

const disconnectDB = async function () {
  await mongo.stop();
};

module.exports = {
  connectDB,
  disconnectDB,
};
