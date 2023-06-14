import { Request, Response, NextFunction } from 'express';

const validatinLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export const emailValid = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export const passValid = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validatinLogin;
