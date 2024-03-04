import express from 'express';
import { USER_REGISTER } from '@constants/routes.constants';
import { registerUser } from '@controllers/user/register.controller';

const router = express.Router();
router.post(USER_REGISTER, registerUser);

export default router;
