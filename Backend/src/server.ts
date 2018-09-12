import app from './app';
import { config } from './config/app-config';
import { openMongooseConnection } from 'conn';

openMongooseConnection()
  .then(() => {
    console.log('connection established');
    app.listen(config.port, () => {
      console.log('Express server listening on port ' + config.port);
    });
  })
  .catch(error => {
    console.log('Error while attempting to connect to MongoDB', error);
    process.exit(1);
  });
