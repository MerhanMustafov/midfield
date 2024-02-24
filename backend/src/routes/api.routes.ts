import express from 'express';
import { ENDPOINT_COUNTRIES_WITH_LEAGUES } from '@constants/routes.constants';
import { getCountriesWithLeaguesData } from '@controllers/countries.controllers';

const router = express.Router();
// TODO: Create controllers
router.get(ENDPOINT_COUNTRIES_WITH_LEAGUES, getCountriesWithLeaguesData);

export default router;
