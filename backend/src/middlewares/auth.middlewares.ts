// middleware/authMiddleware.js
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(_req: Request, _res: Response, next: NextFunction) {
  const authHeader = _req.header('Authorization');

  if (!authHeader) return _res.status(401).json({ error: 'Access denied' });

  const token = authHeader.split(' ')[1];

  if (!token) return _res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return _res.status(401).json({ error: 'Invalid token' });
    }
    (_req as Request & { userId: string }).userId = String((decoded as { id: number }).id);
  });

  next();
}
