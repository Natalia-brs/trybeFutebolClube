import { Request, Response } from 'express';
import User from '../services/UserService';

export default class UserController {
  private service: User;

  constructor() {
    this.service = new User();
  }

  public userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { code, data, message } = await this.service.userLogin(email, password);

    if (!data) {
      return res.status(code).json({ message });
    }

    return res.status(code).json({ token: data });
  };

  public userRole = async (_req: Request, res: Response) => {
    const { role } = res.locals.user;
    return res.status(200).json({ role });
  };
}
