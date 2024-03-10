import express from 'express';
import { FB_API_COUNTRIES_WITH_LEAGUES, FB_API_FIXTURES } from '@constants/routes.constants';
import { getCountriesWithLeaguesData } from '@controllers/api/countries.controllers';
import { getFixturesByDate } from '@controllers/api/fixtures.controller';

const router = express.Router();
router.get(FB_API_COUNTRIES_WITH_LEAGUES, getCountriesWithLeaguesData);
router.get(FB_API_FIXTURES, getFixturesByDate);

export default router;
