import * as express from 'express';
import * as bodyParser from 'body-parser';
import { userRouter } from './routes/users.routes';
import { gamesRouter } from './routes/games.routes';
import { authRouter } from './routes/auth.routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.loadRoutes();
  }

  private loadRoutes(): void {
    // Routes
    this.app.use('/user', userRouter);
    this.app.use('/login', authRouter);
    this.app.use('/games', gamesRouter);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

const app = new App().app;

export default app;
