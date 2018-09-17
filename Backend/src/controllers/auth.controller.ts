import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';

class AuthController {
  public onUserLogin(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate('local', {
      successRedirect: '/games',
      // failureRedirect: '/',
      // failureFlash: true,
      successMessage: 'user ok',
      failureMessage: 'user not ok'
    })(req, res, next);

  }
}

export const controller = new AuthController();
