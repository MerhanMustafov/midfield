import express from 'express';
import { USER_REGISTER, USER_LOGIN } from '@constants/routes.constants';
import { loginUser } from '@controllers/user/login.controller';
import { registerUser } from '@controllers/user/register.controller';

const router = express.Router();
router.post(USER_REGISTER, registerUser);
router.post(USER_LOGIN, loginUser);

export default router;
