import { Router as _Router } from 'express';
import database from '@config/database';

import Users from '../model';
import UsersService from '../services';
import UsersController from '../controller';

const usersModel = new Users(database);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);

const userRouter = _Router();
userRouter.post('/login', usersController.login);

export default userRouter;
