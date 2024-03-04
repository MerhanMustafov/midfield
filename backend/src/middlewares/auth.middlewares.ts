// middleware/authMiddleware.js
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(_req: Request, _res: Response, next: NextFunction) {
  const token = _req.header('Authorization')?.split(' ')[1];

  if (!token) return _res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    (_req as Request & { userId: string }).userId = String((decoded as { id: number }).id);
    next();
  } catch (error) {
    _res.status(401).json({ error: 'Invalid token' });
  }
}
