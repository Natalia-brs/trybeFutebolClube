import * as JWT from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'qualquercoisa';

const createToken = (payload: JWT.JwtPayload) => JWT.sign(payload, secretKey, { expiresIn: '5d' });

export default createToken;
