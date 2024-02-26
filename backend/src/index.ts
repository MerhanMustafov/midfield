import 'module-alias/register';
import '@configs/dotenv.configs';
import '@configs/axios.configs';
import cors from 'cors';
import express, { Express } from 'express';
import { corsConfig } from '@configs/cors.configs';
import onlyMethodsAllowedMiddleware from '@middlewares/allowedMethods.middlewares';
import routerMiddleware from '@middlewares/router.middlewares';

const app: Express = express();
const PORT = 3050;

function serverOn() {
  app.use(cors(corsConfig));
  app.use(onlyMethodsAllowedMiddleware());
  app.use('/static', express.static('assets'));

  app.use(routerMiddleware(app));

  app.listen(PORT, () => {
    console.log('Running');

    // console.log(`CORS are set:\n\torigin - ${process.env.CLIENT_URL}\n\tmethods - GET, HEAD`);
    // console.log(`App is running on port: http://localhost:${PORT}`);
  });
}
serverOn();
