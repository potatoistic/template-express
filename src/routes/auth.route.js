import { Router as _Router } from 'express';

import AuthController from '@src/controllers/auth.controller';
import AuthService from '@src/services/auth.service';

const authRouter = _Router();
const authService = new AuthService();
const authController = new AuthController(authService);

authRouter.post('/login', authController.login);

export default authRouter;
