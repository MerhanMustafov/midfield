import { Express, Request, Response, NextFunction } from 'express';
import { FB_API_ROOT, USER_ROOT } from '@constants/routes.constants';
import apiRoutes from '@routes/api.routes';
import useRoutes from '@routes/user.routes';

// import apiRoutes from '@routes/api.routes';

export default (app: Express) => (_req: Request, _res: Response, next: NextFunction) => {
  app.use(FB_API_ROOT, apiRoutes);
  app.use(USER_ROOT, useRoutes);

  next();
};
