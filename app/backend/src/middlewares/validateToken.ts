import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET as string;

const auth = async (token: string): Promise<JwtPayload | string> => {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return 'error';
  }
};

const validToken = async (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const userAuth = await auth(authorization);
  res.locals.user = userAuth;

  if (userAuth === 'error') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default validToken;
