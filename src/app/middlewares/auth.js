import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHearder = req.headers.authorization;

  if (!authHearder) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  const [, token] = authHearder.split(' ');
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
