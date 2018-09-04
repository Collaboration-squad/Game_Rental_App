import { Request, Response } from 'express';

class UserController {
  constructor() {}

  public getUser(req: Request, res: Response): void {
    res.status(200).send('users works!')
  }
}

export const controller = new UserController()