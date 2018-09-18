import { Request, Response } from "express";
import { User } from "../models/user.model";
import { IUser } from "./../models/user.interface";
import { UserService } from "./../services/user.service";

class UserController {
  constructor(private userService: UserService) {}

  public createUser(req: Request, res: Response): Promise<Response> {
    const newUser = new User(req.body);

    return this.userService
      .create(newUser)
      .then((user: IUser) => res.status(200).send({ msg: "user created" }))
      .catch(() => res.status(500).send({ msg: "failed to create user" }));
  }
}
const service = new UserService();
export const controller = new UserController(service);
