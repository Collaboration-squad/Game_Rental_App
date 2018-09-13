import * as mongoose from 'mongoose';
import { config } from './config/app-config';

function openMongooseConnection(database) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        database,
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
