import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { IUser } from "./../models/user.interface";
import { UserService } from "./../services/user.service";

class AuthController {
  constructor(private userService: UserService) {}

  public onUserLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    return this.userService
      .getUser({ email })
      .then((user: IUser) => {
        const match = bcrypt.compareSync(password, user.password);

        return match
          ? res.status(200).send({ msg: `user ${user._id} successfully login` })
          : res.status(401).send({ msg: "invalid email" });
      })
      .catch(() => res.status(404).send({ msg: "wrong login or password" }));
  }
}
const service = new UserService();
export const controller = new AuthController(service);
