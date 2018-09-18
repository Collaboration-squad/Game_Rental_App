import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { IUser } from "../models/user.interface";
import * as bcrypt from "bcrypt";
import * as passport from 'passport';

class AuthController {
  constructor(private userService: UserService) {}
  public onUserLogin(req: Request, res: Response, next: NextFunction): void {

    passport.authenticate('local', function(err, user, info){
      if(err){
        console.log('error auth', err)
        return res.status(404).send({ msg: "error when validation" })        
      }
      if(!user){
        console.log('no user in db')
        return res.status(401).send({ msg: "wrong login or password" })
      }
      req.logIn(user, err=>{
        if(err) return next(err);
        return res.status(200).send({ msg: `user ${user._id} successfully login` })
      })
   
    })(req, res, next)
  }
}

const service = new UserService();
export const controller = new AuthController(service);
