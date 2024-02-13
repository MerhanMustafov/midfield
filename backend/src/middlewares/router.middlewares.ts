import { Express, Request, Response, NextFunction } from 'express';
import { ENDPOINT_API_ROOT } from '@constants/routes.constants';
import apiRoutes from '@routes/api.routes';

// import apiRoutes from '@routes/api.routes';

export default (app: Express) => (_req: Request, _res: Response, next: NextFunction) => {
  app.use(ENDPOINT_API_ROOT, apiRoutes);

  next();
};
