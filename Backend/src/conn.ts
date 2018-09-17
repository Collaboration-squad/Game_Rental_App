import * as mongoose from 'mongoose';

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

function dropMongooseDb(dataBaseName: string){
  return mongoose.connection.dropCollection(dataBaseName);
}

export { openMongooseConnection, closeMongooseConnection, dropMongooseDb };
