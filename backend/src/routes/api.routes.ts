import express from 'express';
import { ENDPOINT_COUNTRIES } from '@constants/routes.constants';
import { getCountries } from '@controllers/countries.controllers';

const router = express.Router();
// TODO: Create controllers
router.get(ENDPOINT_COUNTRIES, getCountries);

export default router;
