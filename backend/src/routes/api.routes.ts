import express from 'express';
import { FB_API_COUNTRIES_WITH_LEAGUES } from '@constants/routes.constants';
import { getCountriesWithLeaguesData } from '@controllers/api/countries.controllers';

const router = express.Router();
// TODO: Create controllers
router.get(FB_API_COUNTRIES_WITH_LEAGUES, getCountriesWithLeaguesData);

export default router;
