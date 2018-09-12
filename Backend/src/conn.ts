import * as mongoose from 'mongoose';
import { config } from './config/app-config';

function openMongooseConnection() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        config.db,
        {
          useNewUrlParser: true
        }
      )
      .then(() => resolve())
      .catch(err => reject(err));
  });
}

function closeMongooseConnection() {
  return mongoose.disconnect();
}

export { openMongooseConnection, closeMongooseConnection };
