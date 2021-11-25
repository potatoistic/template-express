import { Router as _Router } from 'express';

import authRouter from './auth.route';

const Router = _Router();

Router.use('/auth', authRouter);

export default Router;
