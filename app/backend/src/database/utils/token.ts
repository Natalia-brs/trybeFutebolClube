import { sign, JwtPayload } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'qualquercoisa';

const createToken = (payload: JwtPayload) => sign(payload, secretKey, { expiresIn: '5d' });

export default createToken;
