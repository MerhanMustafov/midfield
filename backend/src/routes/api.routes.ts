import express from 'express';
import { ENDPOINT_LEAGUES } from '@constants/routes.constants';
import { getLeagues } from '@controllers/leagues.controllers';

const router = express.Router();
// TODO: Create controllers
router.get(ENDPOINT_LEAGUES, getLeagues);

export default router;
