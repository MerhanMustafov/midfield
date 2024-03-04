import 'module-alias/register';
import '@configs/dotenv.configs';
import '@configs/axios.configs';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import { corsConfig } from '@configs/cors.configs';
import { pgClient } from '@configs/pgDB.configs';
import verifyToken from '@middlewares/auth.middlewares';
import routerMiddleware from '@middlewares/router.middlewares';

const app: Express = express();
const PORT = 3050;

pgClient.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('<<< connected to postgres DB >>>');
  }
});

app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use('/static', express.static('assets'));
app.use(routerMiddleware(app));

// TODO: EITHER leave it like that for all routes or add verifyToken middleware only to the routes that need authentication
app.use(verifyToken);

async function serverOn() {
  app.listen(PORT, () => {
    console.log(`CORS are set:\n\torigin - ${process.env.CLIENT_URL}\n\tmethods - GET, HEAD`);
    console.log(`App is running on port: http://localhost:${PORT}`);
  });
}
serverOn();
