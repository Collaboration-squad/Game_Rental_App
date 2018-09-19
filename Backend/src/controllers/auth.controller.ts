import { Request, Response, NextFunction } from "express";
import * as passport from "passport";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { IUser } from "./../models/user.interface";
import { UserService } from "./../services/user.service";
 
class AuthController {
  public onUserLogin(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.status(500).send({ msg: "internal error" });
      }

      if (!user) {
        return res.status(401).send({ msg: "wrong login or password" });
      }

      req.logIn(user, err => {
        if (err) return next(err);
        return res
          .status(200)
          .send({ msg: `user ${user._id} successfully login` });
      });
    })(req, res, next);
  }
}

export const controller = new AuthController();
