import { Router as _Router } from 'express';

import AuthRepository from './auth.repository';
import AuthService from './auth.service';
import AuthController from './auth.controller';

const authRouter = _Router();
const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

authRouter.post('/login', authController.login);

export default authRouter;
