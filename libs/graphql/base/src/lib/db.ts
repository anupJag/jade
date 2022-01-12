import * as mongoose from 'mongoose';
import { getLogger } from './logger';
import { ERRORS } from './constants';

export const db = {
  URL: process.env.MONGO_URL,
  NAME: process.env.DB_NAME,
};

export const connectDB = async (): Promise<any> => {
  const logger = getLogger();
  const connect = async () => {
    try {
      await mongoose.connect(`${db.URL}/${db.NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logger.info('Successfully connected to mongodb instance');
    } catch (err) {
      logger.error(`${ERRORS.DB_CONN_ERROR} ${err}`);
    }
  };
  await connect();
  mongoose.connection.on('disconnected', connect);
};
