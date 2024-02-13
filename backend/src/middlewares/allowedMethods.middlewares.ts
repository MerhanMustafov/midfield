import { Request, Response, NextFunction } from 'express';

export default () => (req: Request, res: Response, next: NextFunction) => {
  if (req.method !== ('GET' || 'HEAD')) {
    return res.status(405).send('Method Not Allowed');
  }
  next();
};
